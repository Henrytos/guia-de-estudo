
// functions
function loggingIdentity<Type>(arg:Type): Type{
    console.log(arg)
    return arg
}

loggingIdentity<number>(2)

function loggingIdentityObject<Type , Key extends keyof Type>(value: Type, key:Key): Type{
    console.log(value[key])
    return value
}

loggingIdentityObject({name:'mari'}, 'name')

