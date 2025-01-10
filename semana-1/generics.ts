
// functions
function loggingIdentity<Type>(arg: Type): Type {
    console.log(arg)
    return arg
}

loggingIdentity<number>(2)

function loggingIdentityObject<Type, Key extends keyof Type>(value: Type, key: Key): Type {
    console.log(value[key])
    return value
}

loggingIdentityObject({ name: 'mari' }, 'name')


// interfaces

interface EntityWithUniqueId {
    id: string
}

interface EntityRepository<Entity extends EntityWithUniqueId> {
    create(entity: Entity): Promise<void>
    read(uniqueId: Pick<Entity, 'id'>): Promise<Entity>
    update(uniqueId: Pick<Entity, 'id'>, value: Partial<Entity>): Promise<void>
    delete(uniqueId: Pick<Entity, 'id'>): Promise<void>
}

interface User extends EntityWithUniqueId {
    name: string
    email: string
}

class UsersRepository implements EntityRepository<User>{

    create(entity: User): Promise<void> {
        throw new Error("Method not implemented.")
    }
    read(uniqueId: Pick<User, "id">): Promise<User> {
        throw new Error("Method not implemented.")
    }
    update(uniqueId: Pick<User, "id">, value: Partial<User>): Promise<void> {
        throw new Error("Method not implemented.")
    }
    delete(uniqueId: Pick<User, "id">): Promise<void> {
        throw new Error("Method not implemented.")
    }
}

interface CalculateSum<T> {
    value: T
    add: (x: T, y: T) => T
}

const sum :CalculateSum<number> ={
   add(x, y) {
         return x + y
   }, 
   value: 0
}


// classes

class CalculateSumClass<T> {
    value: T
    add: (x: T, y: T) => T
}

const sumClass = new CalculateSumClass<number>()
sumClass.value = 0
sumClass.add = (x, y) => x + y

console.log(sum.add(2, 3))





export class UniqueEntityID {
  private value: string;

  toString() {
    return this.value;
  }

  toValue() {
    return this.value;
  }

  constructor(value?: string) {
    this.value = value ?? Math.ceil(Math.random() * 99999999999999.999).toString();
  }

  equals(id: UniqueEntityID) {
    return id.toValue() == this.value;
  }
}

export abstract class Entity<Props> {
  private _id: UniqueEntityID;
  protected props: Props;

  protected constructor(props: Props, id?: UniqueEntityID) {
    this._id = id ?? new UniqueEntityID();
    this.props = props;
  }

  get id() {
    return this._id;
  }

  equals(entity: Entity<any>) {
    if (entity.id == this._id) {
      return true;
    }

    if (entity == this) {
      return true;
    }

    return false;
  }
}