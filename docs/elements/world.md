---
id: world
title: World
sidebar_label: World
slug: world
---

The `World` is the heart of Ecstatic. All `Entities` and `Systems` are added to the `World` instance, and its methods allow querying of `Entities`.

## Create a World

To create a `World` instance, all you need to do is "new" one up.

```typescript
import { World } from '@brochington/ecstatic';

const world = new World();
```

## Querying Entities

A `World` instance offers a good amount of methods that can be used to find the `Entities` and `Components` that you want to operate on. 

To see all the methods that can be used to query with, check out the [World API Docs](https://brochington.github.io/ecstatic/classes/world.default.html). 

Query methods can generally be grouped in a couple buckets:

1. `get()` - If you know the entities' id, you can get it directly with get().
2. `find(), findAll()` - Use a predicate to "find" entities.
3. `locate(), locateAll()` - "locate" an entity or entities by what `Components` are attached to it. 
4. `grab(), grabAll(), grabBy()` - Similar to `locate` methods, but also "grabs" a component instance as well. Very handy if you know that you'll need to update a specific component on an entity.

## Destroying /Shutting down a World

If you are going to get rid of a world instance, it can be a good idea to properly destroy all entities by calling their `destroy()` methods, and running the systems one last time. This gives any Systems that monitor the entity "destroying" state a chance to clean up after themselves.

```typescript
let running = true;
let rafId = null;

function renderTick() {
  if (running) {
    world.systems.run();
  
    rafId.current = window.requestAnimationFrame(renderTick);

    return;
  }

  // Need to offer the chance for any systems to cleanup
  // entities that are in a "destroying" state.
  world.entities.forEach((entity) => entity.destroy());
  world.systems.run();

  window.cancelAnimationFrame(rafId);
}

renderTick();
```