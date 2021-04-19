---
id: tracked-component
title: TrackedComponent
sidebar_label: TrackedComponent
slug: tracked-component
---

Sometimes it can be really helpful to react to changes in a `Component`. Ecstatic helps with this by offering a `TrackedComponent`. a `TrackedComponent` is a decorated `Component`, allowing observability without changing the original `Component`.

:::caution

`TrackedComponent` uses JS Proxies under the hood, and as such incurs a very small performance hit. This generally is not a problem at all, but it might not be wise to always use them by default.

:::


## Creating a TrackedComponent

Ecstatic offers a `trackComponent` function that is used to create a TrackedComponent class constructor. `trackComponent` takes the class constructor of the original `Component`, and a config object used to define lifecycle methods.

```typescript
import { trackComponent } from '@brochington/ecstatic';

class Component {}

const TrackedComponent = trackComponent(Component, {
  onAdd: () => console.log("Component has been added to an entity!");
});

world.createEntity().add(new TrackedComponent()) 
// console.logs "Component has been added to an entity!"
```


## TrackedComponent Lifecycle Methods

### onAdd

Called when the `TrackedComponent` is added to an `Entity`.

```typescript
class Component {}

const TrackedComponent = trackComponent(Component, {
  onAdd: (args) => {
    const { component, world, entity, entities } = args;
    // do stuff;
  };
});
```


### onUpdate

Called whenever a property on the `Component` changes. Can be called very frequently on active components, so be careful with this.

```typescript
class Component {}

const TrackedComponent = trackComponent(Component, {
  onUpdate: (args) => {
    const { component, world, previousVal, property, entities } = args;
    // do stuff;
  };
});
```

### onRemove

Called when a `TrackedComponent` is removed from an `Entity`.

```typescript
class Component {}

const TrackedComponent = trackComponent(Component, {
  onRemove: (args) => {
    const { component, world, entity, entities } = args;
    // do stuff;
  };
});
```