
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Libro
 * 
 */
export type Libro = $Result.DefaultSelection<Prisma.$LibroPayload>
/**
 * Model Autor
 * 
 */
export type Autor = $Result.DefaultSelection<Prisma.$AutorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Libros
 * const libros = await prisma.libro.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Libros
   * const libros = await prisma.libro.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.libro`: Exposes CRUD operations for the **Libro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Libros
    * const libros = await prisma.libro.findMany()
    * ```
    */
  get libro(): Prisma.LibroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.autor`: Exposes CRUD operations for the **Autor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Autors
    * const autors = await prisma.autor.findMany()
    * ```
    */
  get autor(): Prisma.AutorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Libro: 'Libro',
    Autor: 'Autor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "libro" | "autor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Libro: {
        payload: Prisma.$LibroPayload<ExtArgs>
        fields: Prisma.LibroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          findFirst: {
            args: Prisma.LibroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          findMany: {
            args: Prisma.LibroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>[]
          }
          create: {
            args: Prisma.LibroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          createMany: {
            args: Prisma.LibroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LibroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>[]
          }
          delete: {
            args: Prisma.LibroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          update: {
            args: Prisma.LibroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          deleteMany: {
            args: Prisma.LibroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LibroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LibroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>[]
          }
          upsert: {
            args: Prisma.LibroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibroPayload>
          }
          aggregate: {
            args: Prisma.LibroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibro>
          }
          groupBy: {
            args: Prisma.LibroGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibroGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibroCountArgs<ExtArgs>
            result: $Utils.Optional<LibroCountAggregateOutputType> | number
          }
        }
      }
      Autor: {
        payload: Prisma.$AutorPayload<ExtArgs>
        fields: Prisma.AutorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          findFirst: {
            args: Prisma.AutorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          findMany: {
            args: Prisma.AutorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>[]
          }
          create: {
            args: Prisma.AutorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          createMany: {
            args: Prisma.AutorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>[]
          }
          delete: {
            args: Prisma.AutorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          update: {
            args: Prisma.AutorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          deleteMany: {
            args: Prisma.AutorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>[]
          }
          upsert: {
            args: Prisma.AutorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          aggregate: {
            args: Prisma.AutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutor>
          }
          groupBy: {
            args: Prisma.AutorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutorCountArgs<ExtArgs>
            result: $Utils.Optional<AutorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    libro?: LibroOmit
    autor?: AutorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Libro
   */

  export type AggregateLibro = {
    _count: LibroCountAggregateOutputType | null
    _avg: LibroAvgAggregateOutputType | null
    _sum: LibroSumAggregateOutputType | null
    _min: LibroMinAggregateOutputType | null
    _max: LibroMaxAggregateOutputType | null
  }

  export type LibroAvgAggregateOutputType = {
    id: number | null
    precio: number | null
  }

  export type LibroSumAggregateOutputType = {
    id: number | null
    precio: number | null
  }

  export type LibroMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    autor: string | null
    precio: number | null
    imagen: string | null
    disponible: boolean | null
  }

  export type LibroMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    autor: string | null
    precio: number | null
    imagen: string | null
    disponible: boolean | null
  }

  export type LibroCountAggregateOutputType = {
    id: number
    titulo: number
    autor: number
    precio: number
    imagen: number
    disponible: number
    _all: number
  }


  export type LibroAvgAggregateInputType = {
    id?: true
    precio?: true
  }

  export type LibroSumAggregateInputType = {
    id?: true
    precio?: true
  }

  export type LibroMinAggregateInputType = {
    id?: true
    titulo?: true
    autor?: true
    precio?: true
    imagen?: true
    disponible?: true
  }

  export type LibroMaxAggregateInputType = {
    id?: true
    titulo?: true
    autor?: true
    precio?: true
    imagen?: true
    disponible?: true
  }

  export type LibroCountAggregateInputType = {
    id?: true
    titulo?: true
    autor?: true
    precio?: true
    imagen?: true
    disponible?: true
    _all?: true
  }

  export type LibroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Libro to aggregate.
     */
    where?: LibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Libros
    **/
    _count?: true | LibroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibroMaxAggregateInputType
  }

  export type GetLibroAggregateType<T extends LibroAggregateArgs> = {
        [P in keyof T & keyof AggregateLibro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibro[P]>
      : GetScalarType<T[P], AggregateLibro[P]>
  }




  export type LibroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibroWhereInput
    orderBy?: LibroOrderByWithAggregationInput | LibroOrderByWithAggregationInput[]
    by: LibroScalarFieldEnum[] | LibroScalarFieldEnum
    having?: LibroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibroCountAggregateInputType | true
    _avg?: LibroAvgAggregateInputType
    _sum?: LibroSumAggregateInputType
    _min?: LibroMinAggregateInputType
    _max?: LibroMaxAggregateInputType
  }

  export type LibroGroupByOutputType = {
    id: number
    titulo: string
    autor: string
    precio: number
    imagen: string
    disponible: boolean
    _count: LibroCountAggregateOutputType | null
    _avg: LibroAvgAggregateOutputType | null
    _sum: LibroSumAggregateOutputType | null
    _min: LibroMinAggregateOutputType | null
    _max: LibroMaxAggregateOutputType | null
  }

  type GetLibroGroupByPayload<T extends LibroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibroGroupByOutputType[P]>
            : GetScalarType<T[P], LibroGroupByOutputType[P]>
        }
      >
    >


  export type LibroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    autor?: boolean
    precio?: boolean
    imagen?: boolean
    disponible?: boolean
  }, ExtArgs["result"]["libro"]>

  export type LibroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    autor?: boolean
    precio?: boolean
    imagen?: boolean
    disponible?: boolean
  }, ExtArgs["result"]["libro"]>

  export type LibroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    autor?: boolean
    precio?: boolean
    imagen?: boolean
    disponible?: boolean
  }, ExtArgs["result"]["libro"]>

  export type LibroSelectScalar = {
    id?: boolean
    titulo?: boolean
    autor?: boolean
    precio?: boolean
    imagen?: boolean
    disponible?: boolean
  }

  export type LibroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "autor" | "precio" | "imagen" | "disponible", ExtArgs["result"]["libro"]>

  export type $LibroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Libro"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      autor: string
      precio: number
      imagen: string
      disponible: boolean
    }, ExtArgs["result"]["libro"]>
    composites: {}
  }

  type LibroGetPayload<S extends boolean | null | undefined | LibroDefaultArgs> = $Result.GetResult<Prisma.$LibroPayload, S>

  type LibroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LibroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibroCountAggregateInputType | true
    }

  export interface LibroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Libro'], meta: { name: 'Libro' } }
    /**
     * Find zero or one Libro that matches the filter.
     * @param {LibroFindUniqueArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LibroFindUniqueArgs>(args: SelectSubset<T, LibroFindUniqueArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Libro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LibroFindUniqueOrThrowArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LibroFindUniqueOrThrowArgs>(args: SelectSubset<T, LibroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroFindFirstArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LibroFindFirstArgs>(args?: SelectSubset<T, LibroFindFirstArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroFindFirstOrThrowArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LibroFindFirstOrThrowArgs>(args?: SelectSubset<T, LibroFindFirstOrThrowArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Libros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Libros
     * const libros = await prisma.libro.findMany()
     * 
     * // Get first 10 Libros
     * const libros = await prisma.libro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const libroWithIdOnly = await prisma.libro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LibroFindManyArgs>(args?: SelectSubset<T, LibroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Libro.
     * @param {LibroCreateArgs} args - Arguments to create a Libro.
     * @example
     * // Create one Libro
     * const Libro = await prisma.libro.create({
     *   data: {
     *     // ... data to create a Libro
     *   }
     * })
     * 
     */
    create<T extends LibroCreateArgs>(args: SelectSubset<T, LibroCreateArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Libros.
     * @param {LibroCreateManyArgs} args - Arguments to create many Libros.
     * @example
     * // Create many Libros
     * const libro = await prisma.libro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LibroCreateManyArgs>(args?: SelectSubset<T, LibroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Libros and returns the data saved in the database.
     * @param {LibroCreateManyAndReturnArgs} args - Arguments to create many Libros.
     * @example
     * // Create many Libros
     * const libro = await prisma.libro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Libros and only return the `id`
     * const libroWithIdOnly = await prisma.libro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LibroCreateManyAndReturnArgs>(args?: SelectSubset<T, LibroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Libro.
     * @param {LibroDeleteArgs} args - Arguments to delete one Libro.
     * @example
     * // Delete one Libro
     * const Libro = await prisma.libro.delete({
     *   where: {
     *     // ... filter to delete one Libro
     *   }
     * })
     * 
     */
    delete<T extends LibroDeleteArgs>(args: SelectSubset<T, LibroDeleteArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Libro.
     * @param {LibroUpdateArgs} args - Arguments to update one Libro.
     * @example
     * // Update one Libro
     * const libro = await prisma.libro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LibroUpdateArgs>(args: SelectSubset<T, LibroUpdateArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Libros.
     * @param {LibroDeleteManyArgs} args - Arguments to filter Libros to delete.
     * @example
     * // Delete a few Libros
     * const { count } = await prisma.libro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LibroDeleteManyArgs>(args?: SelectSubset<T, LibroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Libros
     * const libro = await prisma.libro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LibroUpdateManyArgs>(args: SelectSubset<T, LibroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libros and returns the data updated in the database.
     * @param {LibroUpdateManyAndReturnArgs} args - Arguments to update many Libros.
     * @example
     * // Update many Libros
     * const libro = await prisma.libro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Libros and only return the `id`
     * const libroWithIdOnly = await prisma.libro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LibroUpdateManyAndReturnArgs>(args: SelectSubset<T, LibroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Libro.
     * @param {LibroUpsertArgs} args - Arguments to update or create a Libro.
     * @example
     * // Update or create a Libro
     * const libro = await prisma.libro.upsert({
     *   create: {
     *     // ... data to create a Libro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Libro we want to update
     *   }
     * })
     */
    upsert<T extends LibroUpsertArgs>(args: SelectSubset<T, LibroUpsertArgs<ExtArgs>>): Prisma__LibroClient<$Result.GetResult<Prisma.$LibroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Libros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroCountArgs} args - Arguments to filter Libros to count.
     * @example
     * // Count the number of Libros
     * const count = await prisma.libro.count({
     *   where: {
     *     // ... the filter for the Libros we want to count
     *   }
     * })
    **/
    count<T extends LibroCountArgs>(
      args?: Subset<T, LibroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Libro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LibroAggregateArgs>(args: Subset<T, LibroAggregateArgs>): Prisma.PrismaPromise<GetLibroAggregateType<T>>

    /**
     * Group by Libro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LibroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibroGroupByArgs['orderBy'] }
        : { orderBy?: LibroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LibroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Libro model
   */
  readonly fields: LibroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Libro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Libro model
   */
  interface LibroFieldRefs {
    readonly id: FieldRef<"Libro", 'Int'>
    readonly titulo: FieldRef<"Libro", 'String'>
    readonly autor: FieldRef<"Libro", 'String'>
    readonly precio: FieldRef<"Libro", 'Int'>
    readonly imagen: FieldRef<"Libro", 'String'>
    readonly disponible: FieldRef<"Libro", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Libro findUnique
   */
  export type LibroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Filter, which Libro to fetch.
     */
    where: LibroWhereUniqueInput
  }

  /**
   * Libro findUniqueOrThrow
   */
  export type LibroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Filter, which Libro to fetch.
     */
    where: LibroWhereUniqueInput
  }

  /**
   * Libro findFirst
   */
  export type LibroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Filter, which Libro to fetch.
     */
    where?: LibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libros.
     */
    cursor?: LibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libros.
     */
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * Libro findFirstOrThrow
   */
  export type LibroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Filter, which Libro to fetch.
     */
    where?: LibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libros.
     */
    cursor?: LibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libros.
     */
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * Libro findMany
   */
  export type LibroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Filter, which Libros to fetch.
     */
    where?: LibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libros to fetch.
     */
    orderBy?: LibroOrderByWithRelationInput | LibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Libros.
     */
    cursor?: LibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libros.
     */
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * Libro create
   */
  export type LibroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * The data needed to create a Libro.
     */
    data: XOR<LibroCreateInput, LibroUncheckedCreateInput>
  }

  /**
   * Libro createMany
   */
  export type LibroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Libros.
     */
    data: LibroCreateManyInput | LibroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Libro createManyAndReturn
   */
  export type LibroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * The data used to create many Libros.
     */
    data: LibroCreateManyInput | LibroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Libro update
   */
  export type LibroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * The data needed to update a Libro.
     */
    data: XOR<LibroUpdateInput, LibroUncheckedUpdateInput>
    /**
     * Choose, which Libro to update.
     */
    where: LibroWhereUniqueInput
  }

  /**
   * Libro updateMany
   */
  export type LibroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Libros.
     */
    data: XOR<LibroUpdateManyMutationInput, LibroUncheckedUpdateManyInput>
    /**
     * Filter which Libros to update
     */
    where?: LibroWhereInput
    /**
     * Limit how many Libros to update.
     */
    limit?: number
  }

  /**
   * Libro updateManyAndReturn
   */
  export type LibroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * The data used to update Libros.
     */
    data: XOR<LibroUpdateManyMutationInput, LibroUncheckedUpdateManyInput>
    /**
     * Filter which Libros to update
     */
    where?: LibroWhereInput
    /**
     * Limit how many Libros to update.
     */
    limit?: number
  }

  /**
   * Libro upsert
   */
  export type LibroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * The filter to search for the Libro to update in case it exists.
     */
    where: LibroWhereUniqueInput
    /**
     * In case the Libro found by the `where` argument doesn't exist, create a new Libro with this data.
     */
    create: XOR<LibroCreateInput, LibroUncheckedCreateInput>
    /**
     * In case the Libro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibroUpdateInput, LibroUncheckedUpdateInput>
  }

  /**
   * Libro delete
   */
  export type LibroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
    /**
     * Filter which Libro to delete.
     */
    where: LibroWhereUniqueInput
  }

  /**
   * Libro deleteMany
   */
  export type LibroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Libros to delete
     */
    where?: LibroWhereInput
    /**
     * Limit how many Libros to delete.
     */
    limit?: number
  }

  /**
   * Libro without action
   */
  export type LibroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libro
     */
    select?: LibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libro
     */
    omit?: LibroOmit<ExtArgs> | null
  }


  /**
   * Model Autor
   */

  export type AggregateAutor = {
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  export type AutorAvgAggregateOutputType = {
    id: number | null
  }

  export type AutorSumAggregateOutputType = {
    id: number | null
  }

  export type AutorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    nacionalidad: string | null
  }

  export type AutorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    nacionalidad: string | null
  }

  export type AutorCountAggregateOutputType = {
    id: number
    nombre: number
    nacionalidad: number
    _all: number
  }


  export type AutorAvgAggregateInputType = {
    id?: true
  }

  export type AutorSumAggregateInputType = {
    id?: true
  }

  export type AutorMinAggregateInputType = {
    id?: true
    nombre?: true
    nacionalidad?: true
  }

  export type AutorMaxAggregateInputType = {
    id?: true
    nombre?: true
    nacionalidad?: true
  }

  export type AutorCountAggregateInputType = {
    id?: true
    nombre?: true
    nacionalidad?: true
    _all?: true
  }

  export type AutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Autor to aggregate.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Autors
    **/
    _count?: true | AutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutorMaxAggregateInputType
  }

  export type GetAutorAggregateType<T extends AutorAggregateArgs> = {
        [P in keyof T & keyof AggregateAutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutor[P]>
      : GetScalarType<T[P], AggregateAutor[P]>
  }




  export type AutorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutorWhereInput
    orderBy?: AutorOrderByWithAggregationInput | AutorOrderByWithAggregationInput[]
    by: AutorScalarFieldEnum[] | AutorScalarFieldEnum
    having?: AutorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutorCountAggregateInputType | true
    _avg?: AutorAvgAggregateInputType
    _sum?: AutorSumAggregateInputType
    _min?: AutorMinAggregateInputType
    _max?: AutorMaxAggregateInputType
  }

  export type AutorGroupByOutputType = {
    id: number
    nombre: string
    nacionalidad: string
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  type GetAutorGroupByPayload<T extends AutorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutorGroupByOutputType[P]>
            : GetScalarType<T[P], AutorGroupByOutputType[P]>
        }
      >
    >


  export type AutorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    nacionalidad?: boolean
  }, ExtArgs["result"]["autor"]>

  export type AutorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    nacionalidad?: boolean
  }, ExtArgs["result"]["autor"]>

  export type AutorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    nacionalidad?: boolean
  }, ExtArgs["result"]["autor"]>

  export type AutorSelectScalar = {
    id?: boolean
    nombre?: boolean
    nacionalidad?: boolean
  }

  export type AutorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "nacionalidad", ExtArgs["result"]["autor"]>

  export type $AutorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Autor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      nacionalidad: string
    }, ExtArgs["result"]["autor"]>
    composites: {}
  }

  type AutorGetPayload<S extends boolean | null | undefined | AutorDefaultArgs> = $Result.GetResult<Prisma.$AutorPayload, S>

  type AutorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutorCountAggregateInputType | true
    }

  export interface AutorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Autor'], meta: { name: 'Autor' } }
    /**
     * Find zero or one Autor that matches the filter.
     * @param {AutorFindUniqueArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutorFindUniqueArgs>(args: SelectSubset<T, AutorFindUniqueArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Autor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutorFindUniqueOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutorFindUniqueOrThrowArgs>(args: SelectSubset<T, AutorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindFirstArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutorFindFirstArgs>(args?: SelectSubset<T, AutorFindFirstArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindFirstOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutorFindFirstOrThrowArgs>(args?: SelectSubset<T, AutorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Autors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Autors
     * const autors = await prisma.autor.findMany()
     * 
     * // Get first 10 Autors
     * const autors = await prisma.autor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const autorWithIdOnly = await prisma.autor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutorFindManyArgs>(args?: SelectSubset<T, AutorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Autor.
     * @param {AutorCreateArgs} args - Arguments to create a Autor.
     * @example
     * // Create one Autor
     * const Autor = await prisma.autor.create({
     *   data: {
     *     // ... data to create a Autor
     *   }
     * })
     * 
     */
    create<T extends AutorCreateArgs>(args: SelectSubset<T, AutorCreateArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Autors.
     * @param {AutorCreateManyArgs} args - Arguments to create many Autors.
     * @example
     * // Create many Autors
     * const autor = await prisma.autor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutorCreateManyArgs>(args?: SelectSubset<T, AutorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Autors and returns the data saved in the database.
     * @param {AutorCreateManyAndReturnArgs} args - Arguments to create many Autors.
     * @example
     * // Create many Autors
     * const autor = await prisma.autor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Autors and only return the `id`
     * const autorWithIdOnly = await prisma.autor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutorCreateManyAndReturnArgs>(args?: SelectSubset<T, AutorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Autor.
     * @param {AutorDeleteArgs} args - Arguments to delete one Autor.
     * @example
     * // Delete one Autor
     * const Autor = await prisma.autor.delete({
     *   where: {
     *     // ... filter to delete one Autor
     *   }
     * })
     * 
     */
    delete<T extends AutorDeleteArgs>(args: SelectSubset<T, AutorDeleteArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Autor.
     * @param {AutorUpdateArgs} args - Arguments to update one Autor.
     * @example
     * // Update one Autor
     * const autor = await prisma.autor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutorUpdateArgs>(args: SelectSubset<T, AutorUpdateArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Autors.
     * @param {AutorDeleteManyArgs} args - Arguments to filter Autors to delete.
     * @example
     * // Delete a few Autors
     * const { count } = await prisma.autor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutorDeleteManyArgs>(args?: SelectSubset<T, AutorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Autors
     * const autor = await prisma.autor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutorUpdateManyArgs>(args: SelectSubset<T, AutorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors and returns the data updated in the database.
     * @param {AutorUpdateManyAndReturnArgs} args - Arguments to update many Autors.
     * @example
     * // Update many Autors
     * const autor = await prisma.autor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Autors and only return the `id`
     * const autorWithIdOnly = await prisma.autor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AutorUpdateManyAndReturnArgs>(args: SelectSubset<T, AutorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Autor.
     * @param {AutorUpsertArgs} args - Arguments to update or create a Autor.
     * @example
     * // Update or create a Autor
     * const autor = await prisma.autor.upsert({
     *   create: {
     *     // ... data to create a Autor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Autor we want to update
     *   }
     * })
     */
    upsert<T extends AutorUpsertArgs>(args: SelectSubset<T, AutorUpsertArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorCountArgs} args - Arguments to filter Autors to count.
     * @example
     * // Count the number of Autors
     * const count = await prisma.autor.count({
     *   where: {
     *     // ... the filter for the Autors we want to count
     *   }
     * })
    **/
    count<T extends AutorCountArgs>(
      args?: Subset<T, AutorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AutorAggregateArgs>(args: Subset<T, AutorAggregateArgs>): Prisma.PrismaPromise<GetAutorAggregateType<T>>

    /**
     * Group by Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AutorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutorGroupByArgs['orderBy'] }
        : { orderBy?: AutorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AutorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Autor model
   */
  readonly fields: AutorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Autor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Autor model
   */
  interface AutorFieldRefs {
    readonly id: FieldRef<"Autor", 'Int'>
    readonly nombre: FieldRef<"Autor", 'String'>
    readonly nacionalidad: FieldRef<"Autor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Autor findUnique
   */
  export type AutorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor findUniqueOrThrow
   */
  export type AutorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor findFirst
   */
  export type AutorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor findFirstOrThrow
   */
  export type AutorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor findMany
   */
  export type AutorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Filter, which Autors to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor create
   */
  export type AutorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * The data needed to create a Autor.
     */
    data: XOR<AutorCreateInput, AutorUncheckedCreateInput>
  }

  /**
   * Autor createMany
   */
  export type AutorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Autors.
     */
    data: AutorCreateManyInput | AutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Autor createManyAndReturn
   */
  export type AutorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * The data used to create many Autors.
     */
    data: AutorCreateManyInput | AutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Autor update
   */
  export type AutorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * The data needed to update a Autor.
     */
    data: XOR<AutorUpdateInput, AutorUncheckedUpdateInput>
    /**
     * Choose, which Autor to update.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor updateMany
   */
  export type AutorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Autors.
     */
    data: XOR<AutorUpdateManyMutationInput, AutorUncheckedUpdateManyInput>
    /**
     * Filter which Autors to update
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to update.
     */
    limit?: number
  }

  /**
   * Autor updateManyAndReturn
   */
  export type AutorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * The data used to update Autors.
     */
    data: XOR<AutorUpdateManyMutationInput, AutorUncheckedUpdateManyInput>
    /**
     * Filter which Autors to update
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to update.
     */
    limit?: number
  }

  /**
   * Autor upsert
   */
  export type AutorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * The filter to search for the Autor to update in case it exists.
     */
    where: AutorWhereUniqueInput
    /**
     * In case the Autor found by the `where` argument doesn't exist, create a new Autor with this data.
     */
    create: XOR<AutorCreateInput, AutorUncheckedCreateInput>
    /**
     * In case the Autor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutorUpdateInput, AutorUncheckedUpdateInput>
  }

  /**
   * Autor delete
   */
  export type AutorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Filter which Autor to delete.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor deleteMany
   */
  export type AutorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Autors to delete
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to delete.
     */
    limit?: number
  }

  /**
   * Autor without action
   */
  export type AutorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LibroScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    autor: 'autor',
    precio: 'precio',
    imagen: 'imagen',
    disponible: 'disponible'
  };

  export type LibroScalarFieldEnum = (typeof LibroScalarFieldEnum)[keyof typeof LibroScalarFieldEnum]


  export const AutorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    nacionalidad: 'nacionalidad'
  };

  export type AutorScalarFieldEnum = (typeof AutorScalarFieldEnum)[keyof typeof AutorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LibroWhereInput = {
    AND?: LibroWhereInput | LibroWhereInput[]
    OR?: LibroWhereInput[]
    NOT?: LibroWhereInput | LibroWhereInput[]
    id?: IntFilter<"Libro"> | number
    titulo?: StringFilter<"Libro"> | string
    autor?: StringFilter<"Libro"> | string
    precio?: IntFilter<"Libro"> | number
    imagen?: StringFilter<"Libro"> | string
    disponible?: BoolFilter<"Libro"> | boolean
  }

  export type LibroOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    disponible?: SortOrder
  }

  export type LibroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LibroWhereInput | LibroWhereInput[]
    OR?: LibroWhereInput[]
    NOT?: LibroWhereInput | LibroWhereInput[]
    titulo?: StringFilter<"Libro"> | string
    autor?: StringFilter<"Libro"> | string
    precio?: IntFilter<"Libro"> | number
    imagen?: StringFilter<"Libro"> | string
    disponible?: BoolFilter<"Libro"> | boolean
  }, "id">

  export type LibroOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    disponible?: SortOrder
    _count?: LibroCountOrderByAggregateInput
    _avg?: LibroAvgOrderByAggregateInput
    _max?: LibroMaxOrderByAggregateInput
    _min?: LibroMinOrderByAggregateInput
    _sum?: LibroSumOrderByAggregateInput
  }

  export type LibroScalarWhereWithAggregatesInput = {
    AND?: LibroScalarWhereWithAggregatesInput | LibroScalarWhereWithAggregatesInput[]
    OR?: LibroScalarWhereWithAggregatesInput[]
    NOT?: LibroScalarWhereWithAggregatesInput | LibroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Libro"> | number
    titulo?: StringWithAggregatesFilter<"Libro"> | string
    autor?: StringWithAggregatesFilter<"Libro"> | string
    precio?: IntWithAggregatesFilter<"Libro"> | number
    imagen?: StringWithAggregatesFilter<"Libro"> | string
    disponible?: BoolWithAggregatesFilter<"Libro"> | boolean
  }

  export type AutorWhereInput = {
    AND?: AutorWhereInput | AutorWhereInput[]
    OR?: AutorWhereInput[]
    NOT?: AutorWhereInput | AutorWhereInput[]
    id?: IntFilter<"Autor"> | number
    nombre?: StringFilter<"Autor"> | string
    nacionalidad?: StringFilter<"Autor"> | string
  }

  export type AutorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    nacionalidad?: SortOrder
  }

  export type AutorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: AutorWhereInput | AutorWhereInput[]
    OR?: AutorWhereInput[]
    NOT?: AutorWhereInput | AutorWhereInput[]
    nacionalidad?: StringFilter<"Autor"> | string
  }, "id" | "nombre">

  export type AutorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    nacionalidad?: SortOrder
    _count?: AutorCountOrderByAggregateInput
    _avg?: AutorAvgOrderByAggregateInput
    _max?: AutorMaxOrderByAggregateInput
    _min?: AutorMinOrderByAggregateInput
    _sum?: AutorSumOrderByAggregateInput
  }

  export type AutorScalarWhereWithAggregatesInput = {
    AND?: AutorScalarWhereWithAggregatesInput | AutorScalarWhereWithAggregatesInput[]
    OR?: AutorScalarWhereWithAggregatesInput[]
    NOT?: AutorScalarWhereWithAggregatesInput | AutorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Autor"> | number
    nombre?: StringWithAggregatesFilter<"Autor"> | string
    nacionalidad?: StringWithAggregatesFilter<"Autor"> | string
  }

  export type LibroCreateInput = {
    titulo: string
    autor: string
    precio: number
    imagen: string
    disponible?: boolean
  }

  export type LibroUncheckedCreateInput = {
    id?: number
    titulo: string
    autor: string
    precio: number
    imagen: string
    disponible?: boolean
  }

  export type LibroUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LibroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LibroCreateManyInput = {
    id?: number
    titulo: string
    autor: string
    precio: number
    imagen: string
    disponible?: boolean
  }

  export type LibroUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LibroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    autor?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    imagen?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AutorCreateInput = {
    nombre: string
    nacionalidad: string
  }

  export type AutorUncheckedCreateInput = {
    id?: number
    nombre: string
    nacionalidad: string
  }

  export type AutorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
  }

  export type AutorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
  }

  export type AutorCreateManyInput = {
    id?: number
    nombre: string
    nacionalidad: string
  }

  export type AutorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
  }

  export type AutorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LibroCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    disponible?: SortOrder
  }

  export type LibroAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type LibroMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    disponible?: SortOrder
  }

  export type LibroMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    autor?: SortOrder
    precio?: SortOrder
    imagen?: SortOrder
    disponible?: SortOrder
  }

  export type LibroSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AutorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    nacionalidad?: SortOrder
  }

  export type AutorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AutorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    nacionalidad?: SortOrder
  }

  export type AutorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    nacionalidad?: SortOrder
  }

  export type AutorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}