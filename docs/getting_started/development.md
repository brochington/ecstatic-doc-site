---
id: development
title: Development
slug: /development
---



<!-- things to include: 

world.dev.entities
entity.toDevEntity()
other awesome things

// From Map Editor doc file -->

Ecstatic provides a few utilities to aid in development.

## `entity.toDevEntity()`

For performance reasons, Estatic stores data internally a little...differently. This can make it challanging to get an entity's specific data. Because of this, the `entity.toDevEntity()` method exists.

`entity.toDevEntity` returns:

- The entity's instance id.
- All the components that are currently attached to the entity, given in a decently readable manor.
- A list of all Systems that will be called on. Very helpful to verify that your entity will be called in a System.
- Any tags that have been added to the entity.

```typescript
const world = new World();
const entity = world.createEntity().add(new SomeComponent());

console.log(entity.toDevEntity()); // logs serialized "DevEntity".
```

[DevEntity in API Docs](https://brochington.github.io/ecstatic/classes/deventity.default.html)

## `world.dev.entities`

Sometimes you just want to see all the entities currently active in the world. To do this, simply inspect `world.dev.entities`. This returns an array of all current entities, each serialized into a `DevEntity`.

```typescript
const world = new World();
const entity1 = world.createEntity();
const entity2 = world.createEntity();
const entity3 = world.createEntity();

expect(world.dev.entities).to.have.length(3);

console.log(world.dev.entities) // [DevEntity, DevEntity, DevEntity]

```

## `world.dev.systemComponents()`

`world.dev.systemComponents` is used to retreive a list of all systems, and the components that each system requires.

PRO-TIP: use with `console.table`: `console.table(world.dev.systemComponents)`
