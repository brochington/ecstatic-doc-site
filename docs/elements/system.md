---
id: system
title: System
sidebar_label: System
slug: system
---

`Systems` in Ecstatic are just functions that are associated with a group of Components. Whenever the systems are "run", the function is called on every `Entity` that has all the `Components` associated with that `System`.

## Defining a system

Systems are added to the `World` instance with the `world.addSystem()` method.

Systems are "run" with the `world.systems.run()` method.

The order that systems are added specifies the order in which they are run.

```typescript
const setTransformComps = [Position, Rotation, Scale, GameBody];

const setTransform = (args) => {
  // do system-y stuff;
  const { components } = args;
  const position = components.get(Position);
  const rotation = components.get(Rotation);
  const scale = components.get(Scale);
  const gamebody = components.get(GameBody);

  gamebody.setTransform(position, rotation, scale);
};

world.addSystem(setTransformComps, settransform);

// elsewhere, probably in a render loop.
world.systems.run();
```

## System function arguments

```typescript
const mySystem = (args) => {
  const {
    /**
     * The current entity being iterated.
     */
    entity,
    /**
     * The components that belong to the entity
     */
    components,
    /**
     * The World instance.
     * Use this to access other entities.
     */
    world,

    /**
     * The index of the current entity in all entities to be run on this system.
     */
    index,
    /**
     * This size of all the entities will run on this system.
     */
    size,
    /**
     * Is the first entity to be iterated on this run of a system.
     * Helpful for setting up state that is the same for all entities only once.
     */
    isFirst,
    /**
     * Is the last entity to be iterated on this run of a system.
     * Can be helpful to tear down anything that should be dealt with after all the entites have ran.
     */
    isLast,
  } = args;
}
```
