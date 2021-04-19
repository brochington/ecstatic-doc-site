---
id: entity
title: Entity
sidebar_label: Entity
slug: entity
---

[Entity API Docs](https://brochington.github.io/ecstatic/classes/entity.default.html)

In the ECS pattern, an `Entity` is in essence just a unique id that is used to associate different `Components` together. `Components` ARE NOT stored "on" or "in" an `Entity`. 

Ecstatic's `Entity` objects allow manipulation and access to info associated to the `Entity`'s id.

## Creating an Entity.

There are two methods of creating a new `Entity`.

#### 1. `world.createEntity()`

```typescript
const entityInstance = world.createEntity()
```

Creating a new `Entity` in the way is a little easier, in that you do not need to import the `Entity` class constructor. 

#### 2. `new Entity(world)`

```typescript
import { Entity } from '@brochington/ecstatic';

const entityInstance = new Entity(world); // world instance must be passed in.
```

The largest benefit to being able to just "new up" an `Entity`, is that you may now easily extend the `Entity` class. This is the way in which you can add lifecycle methods to your `Entity` (more info below). It's also nice to be able to add more context to, or "init" an `Entity` by creating a wrapper class.

```typescript
import { Entity } from '@brochington/ecstatic';
import { Square, Position } from 'components';

class SquareEntity extends Entity {
  constructor(size, x, y, world) {
    super(world);

    this
      .add(new Square(size))
      .add(new Position(x, y));
  }
}

```

## Destroying an Entity

When an `Entity` has outlived its usefulness, it needs to be destroyed. There are currently two ways to destroy an `Entity`:

#### `entity.destroy()`

`entity.destroy()` will destroy the entity in a *deferred* manor. The state of the entity will be changed to `destroying` and actual removal of the entity will happen at the end of the next pass of systems. This allows all systems a chance to run any cleanup logic that is needed. 


#### `entity.destroyImmediately()`

`entity.destroyImmediately()` will destroy the entity immediately. The state of the entity will be set to `destroyed`, and systems will not run over the entity when they run next.


## Adding and Removing Components

`Components` may be added and removed via the `add` and `remove` methods.
```typescript
class MyComponent {}

const entity = new Entity(world);

// Pass in a new instance of the Component.
entity.add(new MyComponent());

// Pass in the Component's class Constructor
entity.remove(MyComponent);

```

[entity.add() API Doc](https://brochington.github.io/ecstatic/classes/entity.default.html#add)

[entity.remove() API Doc](https://brochington.github.io/ecstatic/classes/entity.default.html#remove)

## Entity Tags

Tags may be added to entities in much the same way as components. A tag is just a string.

```typescript
const myEntity = world.createEntity().addTag('AwesomeTag');
```

Entities can be queried by tag

```typescript
// If a tag is known to be unique, with only one associated entity
const myEntity = world.getTagged('AwesomeTag');

// If there might be multiple entities that share a tag
const taggedEntities = world.getAllTagged('AwesomeTag');

```

If you are going to use tags to help in locating entities across an app, it's recommended that you use constant or enum values as the keys so that if they change, they can be updated in a central location

```typescript
// tags.js
export const MY_TAG = "awesome-tag";


// elsewhere.js
import { MY_TAG } from "tags";

const entityWithTag = world.createEntity().addTag(MY_TAG);
```

[entity.add() API Doc](https://brochington.github.io/ecstatic/classes/entity.default.html#addtag)

[entity.remove() API Doc](https://brochington.github.io/ecstatic/classes/entity.default.html#removetag)

## State of an Entity

In order to support things like deferred destruction, an `Entity` is essential a state machine. The states are:

#### creating
This is the initial state of the `Entity`. Can be used is systems to run initialization code. 

```typescript
function someSystem({ entity }) {
  if (entity.state === 'creating') {
    // do init logic here.
  }
}
```

#### created

The state of the `Entity` after all `Systems` have run over the entity a single time.

#### destroying

It's often helpful to defer the actual destruction of an entity until the `Systems` have had a chance to run cleanup logic over it. This state is triggered only if the `Entity` is destroyed via the `entity.destroy()` method, and NOT with the `entity.destoryImmediately()` method.

```typescript
function someSystem({ entity }) {
  if (entity.state === 'destroying') {
    // clean up your room.
  }
}
```

#### destroyed

The entity is destroyed, and should probably be released and left for the GC to clean up.

#### error

This state is reached when something wrong has happend...

## Entity Lifecycle Methods

That's right, An `Entity` can have lifecycle methods! Each one is added by extending the `Entity` class.

### onCreate

Called when the entity is created, *after* it has been added to the world.

```typescript
import { Entity } from '@brochington/ecstatic';

class LifecycleEntity extends Entity {
  onCreate(world) {
    // do stuff.
  }
}

```

[API Docs](https://brochington.github.io/ecstatic/classes/entity.default.html#oncreate)

### onComponentAdd

Called when a `Component` is added to the `Entity`. The world and the added component are passed in an arg object.

```typescript
import { Entity } from '@brochington/ecstatic';

class LifecycleEntity extends Entity {
  onComponentAdd({ world, component }) {
    // do stuff.
  }
}

```

[API Docs](https://brochington.github.io/ecstatic/classes/entity.default.html#oncomponentadd)

### onTrackedComponentUpdate

Called when something on a `TrackedComponent` is updated. The world and the added component are passed in an arg object.

```typescript
import { Entity } from '@brochington/ecstatic';

class LifecycleEntity extends Entity {
  onTrackedComponentUpdate({ world, component }) {
    // do stuff.
  }
}

```


[API Docs](https://brochington.github.io/ecstatic/classes/entity.default.html#ontrackedcomponentupdate)

### onComponentRemove


Called when a `Component` is removed from the entity. The world and the added component are passed in an arg object.

```typescript
import { Entity } from '@brochington/ecstatic';

class LifecycleEntity extends Entity {
  onComponentRemove({ world, component }) {
    // do stuff.
  }
}

```

[API Docs](https://brochington.github.io/ecstatic/classes/entity.default.html#oncomponentremove)

### onDestroy

Called when the `Entity` is destroyed. Currently this happens when the entity is in the `destroying` state.

```typescript
import { Entity } from '@brochington/ecstatic';

class LifecycleEntity extends Entity {
  onDestroy(world}) {
    // do stuff.
  }
}

```

[API Docs](https://brochington.github.io/ecstatic/classes/entity.default.html#ondestroy)
