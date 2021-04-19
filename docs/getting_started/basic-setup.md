---
id: basic-setup
title: Basic Setup
sidebar_label: Basic Setup
slug: basic-setup
---

Check out the [Spinning Rectangles](../examples/spinning-rectangles) example to see the code below applied.

## Creating a World

The first thing that must be done is creating an instance of a `World`. A World in Ecstatic contains all instances of entities, and also facilitates registering of systems. The `World`'s API methods will be used used to do things like add `Systems`, create `Entities`, query `Components`, and more. 

[World Instance API methods](https://brochington.github.io/ecstatic/classes/world.default.html)

```typescript
import { World } from '@brochington/ecstatic';

// Create a new World instance.
const world = new World();
```

## Defining and Adding Systems to the `World`

In Ecstatic, A `System` is a function. Associated `Components` are defined when the `System` is added to the `World` via `world.addSystem()`.

```typescript
// Define the components that let the system identify which entities to run on.
// In other words, if an entity has all the defined components, then the system will be called on it.
const systemComponents = [Component1, Component];

// Systems are provided a number of helpful arguments to work on in the function body.
const systemFunction = (args) => {
  const {
    world, // the world instance
    entity, // the current entity
    components, // the current entity's components
    index, // index of which entity of all entities that the system will run over
    isFirst, // If this is the first entity to run in this system pass
    isLast, // If this is the last entity to be run over in this system pass.
    size // The count of entities that match the given system component requirements.
  } = args;;
}


// Register the components and system function together on the world.
// This will return a function that should be called in a loop along with
// all other systems, usually once each "tick".
world.addSystem(systemComponents, systemFunction)
```

## Creating Entities

An `Entity` instance my be created in two ways:

1. Calling `world.createEntity()`;

```typescript
const entityInstance = world.createEntity()
```

2. Calling `new` on the `Entity` Class Constructor;

```typescript
import { Entity } from '@brochington/ecstatic';

const entityInstance = new Entity(world); // world instance must be passed in.
```

:::info

Currently, lifecycle methods may only be added to Entities when they are defined via the `new Entity()`. 

:::

## Creating Component Instances and adding them to an Entity

In Ecstatic, any Class Instance (including functions, see info below) are valid `Components`, and should be able to be added as such on to an `Entity`.


```typescript
class MyComponent {}

const myEntity = world.createEntity();

myEntity.add(new MyComponent());
```

:::info

Note: Since this is Javascript, and "Everything is an Object, even Functions", there is experimental support for using Functions as Components. The use case for exactly why this is helpful is still to be determined. If you would like to experiment with this, then tread carefully, and let us know your results and suggestions.

:::

## Running Systems

Run all `Systems` added to the `World` instance by calling `world.systems.run()`. This will traditionally be called in render loop.

```typescript
function render() {
  world.systems.run();

  window.requestAnimationFrame(render);
}

render();
```

## Querying Entities

There are many methods available on the `World` instance to query entites by what types of Components are attached to them. There is no need to define a "Query" ahead of time. For a complete list, check out the [World Instance Methods](https://brochington.github.io/ecstatic/classes/_src_world_.world.html) in the API Documentation. Some highlights include:

```typescript
// `world.locate()` "locates" a single entity based on its Components.
const entity1 = world.locate([Component1, Component2]);

// `world.grabAll "Grabs" all entities that have a component of the given type attached,
// as well as the actual component instance.
world.grabAll(Component1).forEach(({ entity, component }) => /* do greate things */)
```
