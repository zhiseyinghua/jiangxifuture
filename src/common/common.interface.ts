export interface CommonInterfaceElact {
    hash:string,
    range:string,
    index:string
}

export interface AccessS3Token {
    SecurityToken: string
    AccessKeyId: string
    AccessKeySecret: string
    Expiration: string
}