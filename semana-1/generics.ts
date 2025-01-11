
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