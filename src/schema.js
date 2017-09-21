export default `enum _ModelMutationType {
  CREATED
  UPDATED
  DELETED
}

# Meta information about the query.
  type _QueryMeta {
  count: Int!
}

type AddToCallerCallsPayload {
  executedCallsCall: Call
  callerContact: Contact
}

type AddToRecipientCallsPayload {
  recievedCallsCall: Call
  recipientContact: Contact
}

type Call implements Node {
  caller(filter: ContactFilter): Contact!
    createdAt: String!
    finished: String!
    id: ID!
    recipient(filter: ContactFilter): Contact!
    started: String!
    updatedAt: String!
}

input CallcallerContact {
  age: Int!
    apt: String!
    city: String!
    country: String!
    name: String!
    phone: String!
    street: String!
    executedCallsIds: [ID!]
  executedCalls: [ContactexecutedCallsCall!]
  recievedCallsIds: [ID!]
  recievedCalls: [ContactrecievedCallsCall!]
}

input CallFilter {
# Logical AND on all given filters.
    AND: [CallFilter!]

  # Logical OR on all given filters.
    OR: [CallFilter!]
  createdAt: String

  # All values that are not equal to given value.
    createdAt_not: String

  # All values that are contained in given list.
    createdAt_in: [String!]

  # All values that are not contained in given list.
    createdAt_not_in: [String!]

  # All values less than the given value.
    createdAt_lt: String

  # All values less than or equal the given value.
    createdAt_lte: String

  # All values greater than the given value.
    createdAt_gt: String

  # All values greater than or equal the given value.
    createdAt_gte: String
  finished: String

  # All values that are not equal to given value.
    finished_not: String

  # All values that are contained in given list.
    finished_in: [String!]

  # All values that are not contained in given list.
    finished_not_in: [String!]

  # All values less than the given value.
    finished_lt: String

  # All values less than or equal the given value.
    finished_lte: String

  # All values greater than the given value.
    finished_gt: String

  # All values greater than or equal the given value.
    finished_gte: String
  id: ID

  # All values that are not equal to given value.
    id_not: ID

  # All values that are contained in given list.
    id_in: [ID!]

  # All values that are not contained in given list.
    id_not_in: [ID!]

  # All values less than the given value.
    id_lt: ID

  # All values less than or equal the given value.
    id_lte: ID

  # All values greater than the given value.
    id_gt: ID

  # All values greater than or equal the given value.
    id_gte: ID

  # All values containing the given string.
    id_contains: ID

  # All values not containing the given string.
    id_not_contains: ID

  # All values starting with the given string.
    id_starts_with: ID

  # All values not starting with the given string.
    id_not_starts_with: ID

  # All values ending with the given string.
    id_ends_with: ID

  # All values not ending with the given string.
    id_not_ends_with: ID
  started: String

  # All values that are not equal to given value.
    started_not: String

  # All values that are contained in given list.
    started_in: [String!]

  # All values that are not contained in given list.
    started_not_in: [String!]

  # All values less than the given value.
    started_lt: String

  # All values less than or equal the given value.
    started_lte: String

  # All values greater than the given value.
    started_gt: String

  # All values greater than or equal the given value.
    started_gte: String
  updatedAt: String

  # All values that are not equal to given value.
    updatedAt_not: String

  # All values that are contained in given list.
    updatedAt_in: [String!]

  # All values that are not contained in given list.
    updatedAt_not_in: [String!]

  # All values less than the given value.
    updatedAt_lt: String

  # All values less than or equal the given value.
    updatedAt_lte: String

  # All values greater than the given value.
    updatedAt_gt: String

  # All values greater than or equal the given value.
    updatedAt_gte: String
  caller: ContactFilter
  recipient: ContactFilter
}

enum CallOrderBy {
  createdAt_ASC
  createdAt_DESC
  finished_ASC
  finished_DESC
  id_ASC
  id_DESC
  started_ASC
  started_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CallPreviousValues {
  createdAt: String!
    finished: String!
    id: ID!
    started: String!
    updatedAt: String!
}

input CallrecipientContact {
  age: Int!
    apt: String!
    city: String!
    country: String!
    name: String!
    phone: String!
    street: String!
    executedCallsIds: [ID!]
  executedCalls: [ContactexecutedCallsCall!]
  recievedCallsIds: [ID!]
  recievedCalls: [ContactrecievedCallsCall!]
}

input CallSubscriptionFilter {
# Logical AND on all given filters.
    AND: [CallSubscriptionFilter!]

  # Logical OR on all given filters.
    OR: [CallSubscriptionFilter!]

  # The subscription event gets dispatched when it's listed in mutation_in
  mutation_in: [_ModelMutationType!]

  # The subscription event gets only dispatched when one of the updated fields names is included in this list
  updatedFields_contains: String

  # The subscription event gets only dispatched when all of the field names included in this list have been updated
  updatedFields_contains_every: [String!]

  # The subscription event gets only dispatched when some of the field names included in this list have been updated
  updatedFields_contains_some: [String!]
  node: CallSubscriptionFilterNode
}

input CallSubscriptionFilterNode {
  createdAt: String

  # All values that are not equal to given value.
    createdAt_not: String

  # All values that are contained in given list.
    createdAt_in: [String!]

  # All values that are not contained in given list.
    createdAt_not_in: [String!]

  # All values less than the given value.
    createdAt_lt: String

  # All values less than or equal the given value.
    createdAt_lte: String

  # All values greater than the given value.
    createdAt_gt: String

  # All values greater than or equal the given value.
    createdAt_gte: String
  finished: String

  # All values that are not equal to given value.
    finished_not: String

  # All values that are contained in given list.
    finished_in: [String!]

  # All values that are not contained in given list.
    finished_not_in: [String!]

  # All values less than the given value.
    finished_lt: String

  # All values less than or equal the given value.
    finished_lte: String

  # All values greater than the given value.
    finished_gt: String

  # All values greater than or equal the given value.
    finished_gte: String
  id: ID

  # All values that are not equal to given value.
    id_not: ID

  # All values that are contained in given list.
    id_in: [ID!]

  # All values that are not contained in given list.
    id_not_in: [ID!]

  # All values less than the given value.
    id_lt: ID

  # All values less than or equal the given value.
    id_lte: ID

  # All values greater than the given value.
    id_gt: ID

  # All values greater than or equal the given value.
    id_gte: ID

  # All values containing the given string.
    id_contains: ID

  # All values not containing the given string.
    id_not_contains: ID

  # All values starting with the given string.
    id_starts_with: ID

  # All values not starting with the given string.
    id_not_starts_with: ID

  # All values ending with the given string.
    id_ends_with: ID

  # All values not ending with the given string.
    id_not_ends_with: ID
  started: String

  # All values that are not equal to given value.
    started_not: String

  # All values that are contained in given list.
    started_in: [String!]

  # All values that are not contained in given list.
    started_not_in: [String!]

  # All values less than the given value.
    started_lt: String

  # All values less than or equal the given value.
    started_lte: String

  # All values greater than the given value.
    started_gt: String

  # All values greater than or equal the given value.
    started_gte: String
  updatedAt: String

  # All values that are not equal to given value.
    updatedAt_not: String

  # All values that are contained in given list.
    updatedAt_in: [String!]

  # All values that are not contained in given list.
    updatedAt_not_in: [String!]

  # All values less than the given value.
    updatedAt_lt: String

  # All values less than or equal the given value.
    updatedAt_lte: String

  # All values greater than the given value.
    updatedAt_gt: String

  # All values greater than or equal the given value.
    updatedAt_gte: String
  caller: ContactFilter
  recipient: ContactFilter
}

type CallSubscriptionPayload {
  mutation: _ModelMutationType!
    node: Call
  updatedFields: [String!]
  previousValues: CallPreviousValues
}

type Contact implements Node {
  age: Int!
    apt: String!
    city: String!
    country: String!
    createdAt: String!
    executedCalls(filter: CallFilter, orderBy: CallOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): [Call!]
  id: ID!
    name: String!
    phone: String!
    recievedCalls(filter: CallFilter, orderBy: CallOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): [Call!]
  street: String!
    updatedAt: String!

  # Meta information about the query.
  _executedCallsMeta(filter: CallFilter, orderBy: CallOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): _QueryMeta!

  # Meta information about the query.
  _recievedCallsMeta(filter: CallFilter, orderBy: CallOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): _QueryMeta!
}

input ContactexecutedCallsCall {
  finished: String!
    started: String!
    recipientId: ID
  recipient: CallrecipientContact
}

input ContactFilter {
# Logical AND on all given filters.
    AND: [ContactFilter!]

  # Logical OR on all given filters.
    OR: [ContactFilter!]
  age: Int

  # All values that are not equal to given value.
    age_not: Int

  # All values that are contained in given list.
    age_in: [Int!]

  # All values that are not contained in given list.
    age_not_in: [Int!]

  # All values less than the given value.
    age_lt: Int

  # All values less than or equal the given value.
    age_lte: Int

  # All values greater than the given value.
    age_gt: Int

  # All values greater than or equal the given value.
    age_gte: Int
  apt: String

  # All values that are not equal to given value.
    apt_not: String

  # All values that are contained in given list.
    apt_in: [String!]

  # All values that are not contained in given list.
    apt_not_in: [String!]

  # All values less than the given value.
    apt_lt: String

  # All values less than or equal the given value.
    apt_lte: String

  # All values greater than the given value.
    apt_gt: String

  # All values greater than or equal the given value.
    apt_gte: String

  # All values containing the given string.
    apt_contains: String

  # All values not containing the given string.
    apt_not_contains: String

  # All values starting with the given string.
    apt_starts_with: String

  # All values not starting with the given string.
    apt_not_starts_with: String

  # All values ending with the given string.
    apt_ends_with: String

  # All values not ending with the given string.
    apt_not_ends_with: String
  city: String

  # All values that are not equal to given value.
    city_not: String

  # All values that are contained in given list.
    city_in: [String!]

  # All values that are not contained in given list.
    city_not_in: [String!]

  # All values less than the given value.
    city_lt: String

  # All values less than or equal the given value.
    city_lte: String

  # All values greater than the given value.
    city_gt: String

  # All values greater than or equal the given value.
    city_gte: String

  # All values containing the given string.
    city_contains: String

  # All values not containing the given string.
    city_not_contains: String

  # All values starting with the given string.
    city_starts_with: String

  # All values not starting with the given string.
    city_not_starts_with: String

  # All values ending with the given string.
    city_ends_with: String

  # All values not ending with the given string.
    city_not_ends_with: String
  country: String

  # All values that are not equal to given value.
    country_not: String

  # All values that are contained in given list.
    country_in: [String!]

  # All values that are not contained in given list.
    country_not_in: [String!]

  # All values less than the given value.
    country_lt: String

  # All values less than or equal the given value.
    country_lte: String

  # All values greater than the given value.
    country_gt: String

  # All values greater than or equal the given value.
    country_gte: String

  # All values containing the given string.
    country_contains: String

  # All values not containing the given string.
    country_not_contains: String

  # All values starting with the given string.
    country_starts_with: String

  # All values not starting with the given string.
    country_not_starts_with: String

  # All values ending with the given string.
    country_ends_with: String

  # All values not ending with the given string.
    country_not_ends_with: String
  createdAt: String

  # All values that are not equal to given value.
    createdAt_not: String

  # All values that are contained in given list.
    createdAt_in: [String!]

  # All values that are not contained in given list.
    createdAt_not_in: [String!]

  # All values less than the given value.
    createdAt_lt: String

  # All values less than or equal the given value.
    createdAt_lte: String

  # All values greater than the given value.
    createdAt_gt: String

  # All values greater than or equal the given value.
    createdAt_gte: String
  id: ID

  # All values that are not equal to given value.
    id_not: ID

  # All values that are contained in given list.
    id_in: [ID!]

  # All values that are not contained in given list.
    id_not_in: [ID!]

  # All values less than the given value.
    id_lt: ID

  # All values less than or equal the given value.
    id_lte: ID

  # All values greater than the given value.
    id_gt: ID

  # All values greater than or equal the given value.
    id_gte: ID

  # All values containing the given string.
    id_contains: ID

  # All values not containing the given string.
    id_not_contains: ID

  # All values starting with the given string.
    id_starts_with: ID

  # All values not starting with the given string.
    id_not_starts_with: ID

  # All values ending with the given string.
    id_ends_with: ID

  # All values not ending with the given string.
    id_not_ends_with: ID
  name: String

  # All values that are not equal to given value.
    name_not: String

  # All values that are contained in given list.
    name_in: [String!]

  # All values that are not contained in given list.
    name_not_in: [String!]

  # All values less than the given value.
    name_lt: String

  # All values less than or equal the given value.
    name_lte: String

  # All values greater than the given value.
    name_gt: String

  # All values greater than or equal the given value.
    name_gte: String

  # All values containing the given string.
    name_contains: String

  # All values not containing the given string.
    name_not_contains: String

  # All values starting with the given string.
    name_starts_with: String

  # All values not starting with the given string.
    name_not_starts_with: String

  # All values ending with the given string.
    name_ends_with: String

  # All values not ending with the given string.
    name_not_ends_with: String
  phone: String

  # All values that are not equal to given value.
    phone_not: String

  # All values that are contained in given list.
    phone_in: [String!]

  # All values that are not contained in given list.
    phone_not_in: [String!]

  # All values less than the given value.
    phone_lt: String

  # All values less than or equal the given value.
    phone_lte: String

  # All values greater than the given value.
    phone_gt: String

  # All values greater than or equal the given value.
    phone_gte: String

  # All values containing the given string.
    phone_contains: String

  # All values not containing the given string.
    phone_not_contains: String

  # All values starting with the given string.
    phone_starts_with: String

  # All values not starting with the given string.
    phone_not_starts_with: String

  # All values ending with the given string.
    phone_ends_with: String

  # All values not ending with the given string.
    phone_not_ends_with: String
  street: String

  # All values that are not equal to given value.
    street_not: String

  # All values that are contained in given list.
    street_in: [String!]

  # All values that are not contained in given list.
    street_not_in: [String!]

  # All values less than the given value.
    street_lt: String

  # All values less than or equal the given value.
    street_lte: String

  # All values greater than the given value.
    street_gt: String

  # All values greater than or equal the given value.
    street_gte: String

  # All values containing the given string.
    street_contains: String

  # All values not containing the given string.
    street_not_contains: String

  # All values starting with the given string.
    street_starts_with: String

  # All values not starting with the given string.
    street_not_starts_with: String

  # All values ending with the given string.
    street_ends_with: String

  # All values not ending with the given string.
    street_not_ends_with: String
  updatedAt: String

  # All values that are not equal to given value.
    updatedAt_not: String

  # All values that are contained in given list.
    updatedAt_in: [String!]

  # All values that are not contained in given list.
    updatedAt_not_in: [String!]

  # All values less than the given value.
    updatedAt_lt: String

  # All values less than or equal the given value.
    updatedAt_lte: String

  # All values greater than the given value.
    updatedAt_gt: String

  # All values greater than or equal the given value.
    updatedAt_gte: String
  executedCalls_every: CallFilter
  executedCalls_some: CallFilter
  executedCalls_none: CallFilter
  recievedCalls_every: CallFilter
  recievedCalls_some: CallFilter
  recievedCalls_none: CallFilter
}

enum ContactOrderBy {
  age_ASC
  age_DESC
  apt_ASC
  apt_DESC
  city_ASC
  city_DESC
  country_ASC
  country_DESC
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  phone_ASC
  phone_DESC
  street_ASC
  street_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ContactPreviousValues {
  age: Int!
    apt: String!
    city: String!
    country: String!
    createdAt: String!
    id: ID!
    name: String!
    phone: String!
    street: String!
    updatedAt: String!
}

input ContactrecievedCallsCall {
  finished: String!
    started: String!
    callerId: ID
  caller: CallcallerContact
}

input ContactSubscriptionFilter {
# Logical AND on all given filters.
    AND: [ContactSubscriptionFilter!]

  # Logical OR on all given filters.
    OR: [ContactSubscriptionFilter!]

  # The subscription event gets dispatched when it's listed in mutation_in
  mutation_in: [_ModelMutationType!]

  # The subscription event gets only dispatched when one of the updated fields names is included in this list
  updatedFields_contains: String

  # The subscription event gets only dispatched when all of the field names included in this list have been updated
  updatedFields_contains_every: [String!]

  # The subscription event gets only dispatched when some of the field names included in this list have been updated
  updatedFields_contains_some: [String!]
  node: ContactSubscriptionFilterNode
}

input ContactSubscriptionFilterNode {
  age: Int

  # All values that are not equal to given value.
    age_not: Int

  # All values that are contained in given list.
    age_in: [Int!]

  # All values that are not contained in given list.
    age_not_in: [Int!]

  # All values less than the given value.
    age_lt: Int

  # All values less than or equal the given value.
    age_lte: Int

  # All values greater than the given value.
    age_gt: Int

  # All values greater than or equal the given value.
    age_gte: Int
  apt: String

  # All values that are not equal to given value.
    apt_not: String

  # All values that are contained in given list.
    apt_in: [String!]

  # All values that are not contained in given list.
    apt_not_in: [String!]

  # All values less than the given value.
    apt_lt: String

  # All values less than or equal the given value.
    apt_lte: String

  # All values greater than the given value.
    apt_gt: String

  # All values greater than or equal the given value.
    apt_gte: String

  # All values containing the given string.
    apt_contains: String

  # All values not containing the given string.
    apt_not_contains: String

  # All values starting with the given string.
    apt_starts_with: String

  # All values not starting with the given string.
    apt_not_starts_with: String

  # All values ending with the given string.
    apt_ends_with: String

  # All values not ending with the given string.
    apt_not_ends_with: String
  city: String

  # All values that are not equal to given value.
    city_not: String

  # All values that are contained in given list.
    city_in: [String!]

  # All values that are not contained in given list.
    city_not_in: [String!]

  # All values less than the given value.
    city_lt: String

  # All values less than or equal the given value.
    city_lte: String

  # All values greater than the given value.
    city_gt: String

  # All values greater than or equal the given value.
    city_gte: String

  # All values containing the given string.
    city_contains: String

  # All values not containing the given string.
    city_not_contains: String

  # All values starting with the given string.
    city_starts_with: String

  # All values not starting with the given string.
    city_not_starts_with: String

  # All values ending with the given string.
    city_ends_with: String

  # All values not ending with the given string.
    city_not_ends_with: String
  country: String

  # All values that are not equal to given value.
    country_not: String

  # All values that are contained in given list.
    country_in: [String!]

  # All values that are not contained in given list.
    country_not_in: [String!]

  # All values less than the given value.
    country_lt: String

  # All values less than or equal the given value.
    country_lte: String

  # All values greater than the given value.
    country_gt: String

  # All values greater than or equal the given value.
    country_gte: String

  # All values containing the given string.
    country_contains: String

  # All values not containing the given string.
    country_not_contains: String

  # All values starting with the given string.
    country_starts_with: String

  # All values not starting with the given string.
    country_not_starts_with: String

  # All values ending with the given string.
    country_ends_with: String

  # All values not ending with the given string.
    country_not_ends_with: String
  createdAt: String

  # All values that are not equal to given value.
    createdAt_not: String

  # All values that are contained in given list.
    createdAt_in: [String!]

  # All values that are not contained in given list.
    createdAt_not_in: [String!]

  # All values less than the given value.
    createdAt_lt: String

  # All values less than or equal the given value.
    createdAt_lte: String

  # All values greater than the given value.
    createdAt_gt: String

  # All values greater than or equal the given value.
    createdAt_gte: String
  id: ID

  # All values that are not equal to given value.
    id_not: ID

  # All values that are contained in given list.
    id_in: [ID!]

  # All values that are not contained in given list.
    id_not_in: [ID!]

  # All values less than the given value.
    id_lt: ID

  # All values less than or equal the given value.
    id_lte: ID

  # All values greater than the given value.
    id_gt: ID

  # All values greater than or equal the given value.
    id_gte: ID

  # All values containing the given string.
    id_contains: ID

  # All values not containing the given string.
    id_not_contains: ID

  # All values starting with the given string.
    id_starts_with: ID

  # All values not starting with the given string.
    id_not_starts_with: ID

  # All values ending with the given string.
    id_ends_with: ID

  # All values not ending with the given string.
    id_not_ends_with: ID
  name: String

  # All values that are not equal to given value.
    name_not: String

  # All values that are contained in given list.
    name_in: [String!]

  # All values that are not contained in given list.
    name_not_in: [String!]

  # All values less than the given value.
    name_lt: String

  # All values less than or equal the given value.
    name_lte: String

  # All values greater than the given value.
    name_gt: String

  # All values greater than or equal the given value.
    name_gte: String

  # All values containing the given string.
    name_contains: String

  # All values not containing the given string.
    name_not_contains: String

  # All values starting with the given string.
    name_starts_with: String

  # All values not starting with the given string.
    name_not_starts_with: String

  # All values ending with the given string.
    name_ends_with: String

  # All values not ending with the given string.
    name_not_ends_with: String
  phone: String

  # All values that are not equal to given value.
    phone_not: String

  # All values that are contained in given list.
    phone_in: [String!]

  # All values that are not contained in given list.
    phone_not_in: [String!]

  # All values less than the given value.
    phone_lt: String

  # All values less than or equal the given value.
    phone_lte: String

  # All values greater than the given value.
    phone_gt: String

  # All values greater than or equal the given value.
    phone_gte: String

  # All values containing the given string.
    phone_contains: String

  # All values not containing the given string.
    phone_not_contains: String

  # All values starting with the given string.
    phone_starts_with: String

  # All values not starting with the given string.
    phone_not_starts_with: String

  # All values ending with the given string.
    phone_ends_with: String

  # All values not ending with the given string.
    phone_not_ends_with: String
  street: String

  # All values that are not equal to given value.
    street_not: String

  # All values that are contained in given list.
    street_in: [String!]

  # All values that are not contained in given list.
    street_not_in: [String!]

  # All values less than the given value.
    street_lt: String

  # All values less than or equal the given value.
    street_lte: String

  # All values greater than the given value.
    street_gt: String

  # All values greater than or equal the given value.
    street_gte: String

  # All values containing the given string.
    street_contains: String

  # All values not containing the given string.
    street_not_contains: String

  # All values starting with the given string.
    street_starts_with: String

  # All values not starting with the given string.
    street_not_starts_with: String

  # All values ending with the given string.
    street_ends_with: String

  # All values not ending with the given string.
    street_not_ends_with: String
  updatedAt: String

  # All values that are not equal to given value.
    updatedAt_not: String

  # All values that are contained in given list.
    updatedAt_in: [String!]

  # All values that are not contained in given list.
    updatedAt_not_in: [String!]

  # All values less than the given value.
    updatedAt_lt: String

  # All values less than or equal the given value.
    updatedAt_lte: String

  # All values greater than the given value.
    updatedAt_gt: String

  # All values greater than or equal the given value.
    updatedAt_gte: String
  executedCalls_every: CallFilter
  executedCalls_some: CallFilter
  executedCalls_none: CallFilter
  recievedCalls_every: CallFilter
  recievedCalls_some: CallFilter
  recievedCalls_none: CallFilter
}

type ContactSubscriptionPayload {
  mutation: _ModelMutationType!
    node: Contact
  updatedFields: [String!]
  previousValues: ContactPreviousValues
}

input CreateCall {
  finished: String!
    started: String!
    callerId: ID
  caller: CallcallerContact
  recipientId: ID
  recipient: CallrecipientContact
}

input CreateContact {
  age: Int!
    apt: String!
    city: String!
    country: String!
    name: String!
    phone: String!
    street: String!
    executedCallsIds: [ID!]
  executedCalls: [ContactexecutedCallsCall!]
  recievedCallsIds: [ID!]
  recievedCalls: [ContactrecievedCallsCall!]
}

input CreateFile {
  name: String!
}

input CreateUser {
  email: String
  name: String!
    password: String
}


type File implements Node {
  contentType: String!
    createdAt: String!
    id: ID!
    name: String!
    secret: String!
    size: Int!
    updatedAt: String!
    url: String!
}

input FileFilter {
# Logical AND on all given filters.
    AND: [FileFilter!]

  # Logical OR on all given filters.
    OR: [FileFilter!]
  contentType: String

  # All values that are not equal to given value.
    contentType_not: String

  # All values that are contained in given list.
    contentType_in: [String!]

  # All values that are not contained in given list.
    contentType_not_in: [String!]

  # All values less than the given value.
    contentType_lt: String

  # All values less than or equal the given value.
    contentType_lte: String

  # All values greater than the given value.
    contentType_gt: String

  # All values greater than or equal the given value.
    contentType_gte: String

  # All values containing the given string.
    contentType_contains: String

  # All values not containing the given string.
    contentType_not_contains: String

  # All values starting with the given string.
    contentType_starts_with: String

  # All values not starting with the given string.
    contentType_not_starts_with: String

  # All values ending with the given string.
    contentType_ends_with: String

  # All values not ending with the given string.
    contentType_not_ends_with: String
  createdAt: String

  # All values that are not equal to given value.
    createdAt_not: String

  # All values that are contained in given list.
    createdAt_in: [String!]

  # All values that are not contained in given list.
    createdAt_not_in: [String!]

  # All values less than the given value.
    createdAt_lt: String

  # All values less than or equal the given value.
    createdAt_lte: String

  # All values greater than the given value.
    createdAt_gt: String

  # All values greater than or equal the given value.
    createdAt_gte: String
  id: ID

  # All values that are not equal to given value.
    id_not: ID

  # All values that are contained in given list.
    id_in: [ID!]

  # All values that are not contained in given list.
    id_not_in: [ID!]

  # All values less than the given value.
    id_lt: ID

  # All values less than or equal the given value.
    id_lte: ID

  # All values greater than the given value.
    id_gt: ID

  # All values greater than or equal the given value.
    id_gte: ID

  # All values containing the given string.
    id_contains: ID

  # All values not containing the given string.
    id_not_contains: ID

  # All values starting with the given string.
    id_starts_with: ID

  # All values not starting with the given string.
    id_not_starts_with: ID

  # All values ending with the given string.
    id_ends_with: ID

  # All values not ending with the given string.
    id_not_ends_with: ID
  name: String

  # All values that are not equal to given value.
    name_not: String

  # All values that are contained in given list.
    name_in: [String!]

  # All values that are not contained in given list.
    name_not_in: [String!]

  # All values less than the given value.
    name_lt: String

  # All values less than or equal the given value.
    name_lte: String

  # All values greater than the given value.
    name_gt: String

  # All values greater than or equal the given value.
    name_gte: String

  # All values containing the given string.
    name_contains: String

  # All values not containing the given string.
    name_not_contains: String

  # All values starting with the given string.
    name_starts_with: String

  # All values not starting with the given string.
    name_not_starts_with: String

  # All values ending with the given string.
    name_ends_with: String

  # All values not ending with the given string.
    name_not_ends_with: String
  secret: String

  # All values that are not equal to given value.
    secret_not: String

  # All values that are contained in given list.
    secret_in: [String!]

  # All values that are not contained in given list.
    secret_not_in: [String!]

  # All values less than the given value.
    secret_lt: String

  # All values less than or equal the given value.
    secret_lte: String

  # All values greater than the given value.
    secret_gt: String

  # All values greater than or equal the given value.
    secret_gte: String

  # All values containing the given string.
    secret_contains: String

  # All values not containing the given string.
    secret_not_contains: String

  # All values starting with the given string.
    secret_starts_with: String

  # All values not starting with the given string.
    secret_not_starts_with: String

  # All values ending with the given string.
    secret_ends_with: String

  # All values not ending with the given string.
    secret_not_ends_with: String
  size: Int

  # All values that are not equal to given value.
    size_not: Int

  # All values that are contained in given list.
    size_in: [Int!]

  # All values that are not contained in given list.
    size_not_in: [Int!]

  # All values less than the given value.
    size_lt: Int

  # All values less than or equal the given value.
    size_lte: Int

  # All values greater than the given value.
    size_gt: Int

  # All values greater than or equal the given value.
    size_gte: Int
  updatedAt: String

  # All values that are not equal to given value.
    updatedAt_not: String

  # All values that are contained in given list.
    updatedAt_in: [String!]

  # All values that are not contained in given list.
    updatedAt_not_in: [String!]

  # All values less than the given value.
    updatedAt_lt: String

  # All values less than or equal the given value.
    updatedAt_lte: String

  # All values greater than the given value.
    updatedAt_gt: String

  # All values greater than or equal the given value.
    updatedAt_gte: String
  url: String

  # All values that are not equal to given value.
    url_not: String

  # All values that are contained in given list.
    url_in: [String!]

  # All values that are not contained in given list.
    url_not_in: [String!]

  # All values less than the given value.
    url_lt: String

  # All values less than or equal the given value.
    url_lte: String

  # All values greater than the given value.
    url_gt: String

  # All values greater than or equal the given value.
    url_gte: String

  # All values containing the given string.
    url_contains: String

  # All values not containing the given string.
    url_not_contains: String

  # All values starting with the given string.
    url_starts_with: String

  # All values not starting with the given string.
    url_not_starts_with: String

  # All values ending with the given string.
    url_ends_with: String

  # All values not ending with the given string.
    url_not_ends_with: String
}

enum FileOrderBy {
  contentType_ASC
  contentType_DESC
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  secret_ASC
  secret_DESC
  size_ASC
  size_DESC
  updatedAt_ASC
  updatedAt_DESC
  url_ASC
  url_DESC
}

type FilePreviousValues {
  contentType: String!
    createdAt: String!
    id: ID!
    name: String!
    secret: String!
    size: Int!
    updatedAt: String!
    url: String!
}

input FileSubscriptionFilter {
# Logical AND on all given filters.
    AND: [FileSubscriptionFilter!]

  # Logical OR on all given filters.
    OR: [FileSubscriptionFilter!]

  # The subscription event gets dispatched when it's listed in mutation_in
  mutation_in: [_ModelMutationType!]

  # The subscription event gets only dispatched when one of the updated fields names is included in this list
  updatedFields_contains: String

  # The subscription event gets only dispatched when all of the field names included in this list have been updated
  updatedFields_contains_every: [String!]

  # The subscription event gets only dispatched when some of the field names included in this list have been updated
  updatedFields_contains_some: [String!]
  node: FileSubscriptionFilterNode
}

input FileSubscriptionFilterNode {
  contentType: String

  # All values that are not equal to given value.
    contentType_not: String

  # All values that are contained in given list.
    contentType_in: [String!]

  # All values that are not contained in given list.
    contentType_not_in: [String!]

  # All values less than the given value.
    contentType_lt: String

  # All values less than or equal the given value.
    contentType_lte: String

  # All values greater than the given value.
    contentType_gt: String

  # All values greater than or equal the given value.
    contentType_gte: String

  # All values containing the given string.
    contentType_contains: String

  # All values not containing the given string.
    contentType_not_contains: String

  # All values starting with the given string.
    contentType_starts_with: String

  # All values not starting with the given string.
    contentType_not_starts_with: String

  # All values ending with the given string.
    contentType_ends_with: String

  # All values not ending with the given string.
    contentType_not_ends_with: String
  createdAt: String

  # All values that are not equal to given value.
    createdAt_not: String

  # All values that are contained in given list.
    createdAt_in: [String!]

  # All values that are not contained in given list.
    createdAt_not_in: [String!]

  # All values less than the given value.
    createdAt_lt: String

  # All values less than or equal the given value.
    createdAt_lte: String

  # All values greater than the given value.
    createdAt_gt: String

  # All values greater than or equal the given value.
    createdAt_gte: String
  id: ID

  # All values that are not equal to given value.
    id_not: ID

  # All values that are contained in given list.
    id_in: [ID!]

  # All values that are not contained in given list.
    id_not_in: [ID!]

  # All values less than the given value.
    id_lt: ID

  # All values less than or equal the given value.
    id_lte: ID

  # All values greater than the given value.
    id_gt: ID

  # All values greater than or equal the given value.
    id_gte: ID

  # All values containing the given string.
    id_contains: ID

  # All values not containing the given string.
    id_not_contains: ID

  # All values starting with the given string.
    id_starts_with: ID

  # All values not starting with the given string.
    id_not_starts_with: ID

  # All values ending with the given string.
    id_ends_with: ID

  # All values not ending with the given string.
    id_not_ends_with: ID
  name: String

  # All values that are not equal to given value.
    name_not: String

  # All values that are contained in given list.
    name_in: [String!]

  # All values that are not contained in given list.
    name_not_in: [String!]

  # All values less than the given value.
    name_lt: String

  # All values less than or equal the given value.
    name_lte: String

  # All values greater than the given value.
    name_gt: String

  # All values greater than or equal the given value.
    name_gte: String

  # All values containing the given string.
    name_contains: String

  # All values not containing the given string.
    name_not_contains: String

  # All values starting with the given string.
    name_starts_with: String

  # All values not starting with the given string.
    name_not_starts_with: String

  # All values ending with the given string.
    name_ends_with: String

  # All values not ending with the given string.
    name_not_ends_with: String
  secret: String

  # All values that are not equal to given value.
    secret_not: String

  # All values that are contained in given list.
    secret_in: [String!]

  # All values that are not contained in given list.
    secret_not_in: [String!]

  # All values less than the given value.
    secret_lt: String

  # All values less than or equal the given value.
    secret_lte: String

  # All values greater than the given value.
    secret_gt: String

  # All values greater than or equal the given value.
    secret_gte: String

  # All values containing the given string.
    secret_contains: String

  # All values not containing the given string.
    secret_not_contains: String

  # All values starting with the given string.
    secret_starts_with: String

  # All values not starting with the given string.
    secret_not_starts_with: String

  # All values ending with the given string.
    secret_ends_with: String

  # All values not ending with the given string.
    secret_not_ends_with: String
  size: Int

  # All values that are not equal to given value.
    size_not: Int

  # All values that are contained in given list.
    size_in: [Int!]

  # All values that are not contained in given list.
    size_not_in: [Int!]

  # All values less than the given value.
    size_lt: Int

  # All values less than or equal the given value.
    size_lte: Int

  # All values greater than the given value.
    size_gt: Int

  # All values greater than or equal the given value.
    size_gte: Int
  updatedAt: String

  # All values that are not equal to given value.
    updatedAt_not: String

  # All values that are contained in given list.
    updatedAt_in: [String!]

  # All values that are not contained in given list.
    updatedAt_not_in: [String!]

  # All values less than the given value.
    updatedAt_lt: String

  # All values less than or equal the given value.
    updatedAt_lte: String

  # All values greater than the given value.
    updatedAt_gt: String

  # All values greater than or equal the given value.
    updatedAt_gte: String
  url: String

  # All values that are not equal to given value.
    url_not: String

  # All values that are contained in given list.
    url_in: [String!]

  # All values that are not contained in given list.
    url_not_in: [String!]

  # All values less than the given value.
    url_lt: String

  # All values less than or equal the given value.
    url_lte: String

  # All values greater than the given value.
    url_gt: String

  # All values greater than or equal the given value.
    url_gte: String

  # All values containing the given string.
    url_contains: String

  # All values not containing the given string.
    url_not_contains: String

  # All values starting with the given string.
    url_starts_with: String

  # All values not starting with the given string.
    url_not_starts_with: String

  # All values ending with the given string.
    url_ends_with: String

  # All values not ending with the given string.
    url_not_ends_with: String
}

type FileSubscriptionPayload {
  mutation: _ModelMutationType!
    node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

type Mutation {
  createCall(finished: String!, started: String!, callerId: ID, caller: CallcallerContact, recipientId: ID, recipient: CallrecipientContact): Call
  createContact(age: Int!, apt: String!, city: String!, country: String!, name: String!, phone: String!, street: String!, executedCallsIds: [ID!], executedCalls: [ContactexecutedCallsCall!], recievedCallsIds: [ID!], recievedCalls: [ContactrecievedCallsCall!]): Contact
  createFile(name: String!): File
  updateCall(finished: String, id: ID!, started: String, callerId: ID, caller: CallcallerContact, recipientId: ID, recipient: CallrecipientContact): Call
  updateContact(age: Int, apt: String, city: String, country: String, id: ID!, name: String, phone: String, street: String, executedCallsIds: [ID!], executedCalls: [ContactexecutedCallsCall!], recievedCallsIds: [ID!], recievedCalls: [ContactrecievedCallsCall!]): Contact
  updateFile(id: ID!, name: String): File
  updateUser(email: String, id: ID!, name: String, password: String): User
  updateOrCreateCall(update: UpdateCall!, create: CreateCall!): Call
  updateOrCreateContact(update: UpdateContact!, create: CreateContact!): Contact
  updateOrCreateFile(update: UpdateFile!, create: CreateFile!): File
  updateOrCreateUser(update: UpdateUser!, create: CreateUser!): User
  deleteCall(id: ID!): Call
  deleteContact(id: ID!): Contact
  deleteFile(id: ID!): File
  deleteUser(id: ID!): User
  addToCallerCalls(callerContactId: ID!, executedCallsCallId: ID!): AddToCallerCallsPayload
  addToRecipientCalls(recipientContactId: ID!, recievedCallsCallId: ID!): AddToRecipientCallsPayload
  createUser(email: String, name: String!, password: String): User
}

# An object with an ID
interface Node {
# The id of the object.
    id: ID!
}

type Query {
  allCalls(filter: CallFilter, orderBy: CallOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): [Call!]!
    allContacts(filter: ContactFilter, orderBy: ContactOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): [Contact!]!
    allFiles(filter: FileFilter, orderBy: FileOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): [File!]!
    allUsers(filter: UserFilter, orderBy: UserOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): [User!]!
    _allCallsMeta(filter: CallFilter, orderBy: CallOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): _QueryMeta!
    _allContactsMeta(filter: ContactFilter, orderBy: ContactOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): _QueryMeta!
    _allFilesMeta(filter: FileFilter, orderBy: FileOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): _QueryMeta!
    _allUsersMeta(filter: UserFilter, orderBy: UserOrderBy, skip: Int, after: String, before: String, first: Int, last: Int): _QueryMeta!
    Call(id: ID): Call
  Contact(id: ID): Contact
  File(id: ID, secret: String, url: String): File
  User(email: String, id: ID): User
  user: User

  # Fetches an object given its ID
  node(
    # The ID of an object
  id: ID!
): Node
}

type Subscription {
  Call(filter: CallSubscriptionFilter): CallSubscriptionPayload
  Contact(filter: ContactSubscriptionFilter): ContactSubscriptionPayload
  File(filter: FileSubscriptionFilter): FileSubscriptionPayload
  User(filter: UserSubscriptionFilter): UserSubscriptionPayload
}

input UpdateCall {
  finished: String
  id: ID!
    started: String
  callerId: ID
  caller: CallcallerContact
  recipientId: ID
  recipient: CallrecipientContact
}

input UpdateContact {
  age: Int
  apt: String
  city: String
  country: String
  id: ID!
    name: String
  phone: String
  street: String
  executedCallsIds: [ID!]
  executedCalls: [ContactexecutedCallsCall!]
  recievedCallsIds: [ID!]
  recievedCalls: [ContactrecievedCallsCall!]
}

input UpdateFile {
  id: ID!
    name: String
}

input UpdateUser {
  email: String
  id: ID!
    name: String
  password: String
}

type User implements Node {
  createdAt: String!
    email: String
  id: ID!
    name: String!
    password: String
  updatedAt: String!
}

input UserFilter {
# Logical AND on all given filters.
    AND: [UserFilter!]

  # Logical OR on all given filters.
    OR: [UserFilter!]
  createdAt: String

  # All values that are not equal to given value.
    createdAt_not: String

  # All values that are contained in given list.
    createdAt_in: [String!]

  # All values that are not contained in given list.
    createdAt_not_in: [String!]

  # All values less than the given value.
    createdAt_lt: String

  # All values less than or equal the given value.
    createdAt_lte: String

  # All values greater than the given value.
    createdAt_gt: String

  # All values greater than or equal the given value.
    createdAt_gte: String
  email: String

  # All values that are not equal to given value.
    email_not: String

  # All values that are contained in given list.
    email_in: [String!]

  # All values that are not contained in given list.
    email_not_in: [String!]

  # All values less than the given value.
    email_lt: String

  # All values less than or equal the given value.
    email_lte: String

  # All values greater than the given value.
    email_gt: String

  # All values greater than or equal the given value.
    email_gte: String

  # All values containing the given string.
    email_contains: String

  # All values not containing the given string.
    email_not_contains: String

  # All values starting with the given string.
    email_starts_with: String

  # All values not starting with the given string.
    email_not_starts_with: String

  # All values ending with the given string.
    email_ends_with: String

  # All values not ending with the given string.
    email_not_ends_with: String
  id: ID

  # All values that are not equal to given value.
    id_not: ID

  # All values that are contained in given list.
    id_in: [ID!]

  # All values that are not contained in given list.
    id_not_in: [ID!]

  # All values less than the given value.
    id_lt: ID

  # All values less than or equal the given value.
    id_lte: ID

  # All values greater than the given value.
    id_gt: ID

  # All values greater than or equal the given value.
    id_gte: ID

  # All values containing the given string.
    id_contains: ID

  # All values not containing the given string.
    id_not_contains: ID

  # All values starting with the given string.
    id_starts_with: ID

  # All values not starting with the given string.
    id_not_starts_with: ID

  # All values ending with the given string.
    id_ends_with: ID

  # All values not ending with the given string.
    id_not_ends_with: ID
  name: String

  # All values that are not equal to given value.
    name_not: String

  # All values that are contained in given list.
    name_in: [String!]

  # All values that are not contained in given list.
    name_not_in: [String!]

  # All values less than the given value.
    name_lt: String

  # All values less than or equal the given value.
    name_lte: String

  # All values greater than the given value.
    name_gt: String

  # All values greater than or equal the given value.
    name_gte: String

  # All values containing the given string.
    name_contains: String

  # All values not containing the given string.
    name_not_contains: String

  # All values starting with the given string.
    name_starts_with: String

  # All values not starting with the given string.
    name_not_starts_with: String

  # All values ending with the given string.
    name_ends_with: String

  # All values not ending with the given string.
    name_not_ends_with: String
  password: String

  # All values that are not equal to given value.
    password_not: String

  # All values that are contained in given list.
    password_in: [String!]

  # All values that are not contained in given list.
    password_not_in: [String!]

  # All values less than the given value.
    password_lt: String

  # All values less than or equal the given value.
    password_lte: String

  # All values greater than the given value.
    password_gt: String

  # All values greater than or equal the given value.
    password_gte: String

  # All values containing the given string.
    password_contains: String

  # All values not containing the given string.
    password_not_contains: String

  # All values starting with the given string.
    password_starts_with: String

  # All values not starting with the given string.
    password_not_starts_with: String

  # All values ending with the given string.
    password_ends_with: String

  # All values not ending with the given string.
    password_not_ends_with: String
  updatedAt: String

  # All values that are not equal to given value.
    updatedAt_not: String

  # All values that are contained in given list.
    updatedAt_in: [String!]

  # All values that are not contained in given list.
    updatedAt_not_in: [String!]

  # All values less than the given value.
    updatedAt_lt: String

  # All values less than or equal the given value.
    updatedAt_lte: String

  # All values greater than the given value.
    updatedAt_gt: String

  # All values greater than or equal the given value.
    updatedAt_gte: String
}

enum UserOrderBy {
  createdAt_ASC
  createdAt_DESC
  email_ASC
  email_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  createdAt: String!
    email: String
  id: ID!
    name: String!
    password: String
  updatedAt: String!
}

input UserSubscriptionFilter {
# Logical AND on all given filters.
    AND: [UserSubscriptionFilter!]

  # Logical OR on all given filters.
    OR: [UserSubscriptionFilter!]

  # The subscription event gets dispatched when it's listed in mutation_in
  mutation_in: [_ModelMutationType!]

  # The subscription event gets only dispatched when one of the updated fields names is included in this list
  updatedFields_contains: String

  # The subscription event gets only dispatched when all of the field names included in this list have been updated
  updatedFields_contains_every: [String!]

  # The subscription event gets only dispatched when some of the field names included in this list have been updated
  updatedFields_contains_some: [String!]
  node: UserSubscriptionFilterNode
}

input UserSubscriptionFilterNode {
  createdAt: String

  # All values that are not equal to given value.
    createdAt_not: String

  # All values that are contained in given list.
    createdAt_in: [String!]

  # All values that are not contained in given list.
    createdAt_not_in: [String!]

  # All values less than the given value.
    createdAt_lt: String

  # All values less than or equal the given value.
    createdAt_lte: String

  # All values greater than the given value.
    createdAt_gt: String

  # All values greater than or equal the given value.
    createdAt_gte: String
  email: String

  # All values that are not equal to given value.
    email_not: String

  # All values that are contained in given list.
    email_in: [String!]

  # All values that are not contained in given list.
    email_not_in: [String!]

  # All values less than the given value.
    email_lt: String

  # All values less than or equal the given value.
    email_lte: String

  # All values greater than the given value.
    email_gt: String

  # All values greater than or equal the given value.
    email_gte: String

  # All values containing the given string.
    email_contains: String

  # All values not containing the given string.
    email_not_contains: String

  # All values starting with the given string.
    email_starts_with: String

  # All values not starting with the given string.
    email_not_starts_with: String

  # All values ending with the given string.
    email_ends_with: String

  # All values not ending with the given string.
    email_not_ends_with: String
  id: ID

  # All values that are not equal to given value.
    id_not: ID

  # All values that are contained in given list.
    id_in: [ID!]

  # All values that are not contained in given list.
    id_not_in: [ID!]

  # All values less than the given value.
    id_lt: ID

  # All values less than or equal the given value.
    id_lte: ID

  # All values greater than the given value.
    id_gt: ID

  # All values greater than or equal the given value.
    id_gte: ID

  # All values containing the given string.
    id_contains: ID

  # All values not containing the given string.
    id_not_contains: ID

  # All values starting with the given string.
    id_starts_with: ID

  # All values not starting with the given string.
    id_not_starts_with: ID

  # All values ending with the given string.
    id_ends_with: ID

  # All values not ending with the given string.
    id_not_ends_with: ID
  name: String

  # All values that are not equal to given value.
    name_not: String

  # All values that are contained in given list.
    name_in: [String!]

  # All values that are not contained in given list.
    name_not_in: [String!]

  # All values less than the given value.
    name_lt: String

  # All values less than or equal the given value.
    name_lte: String

  # All values greater than the given value.
    name_gt: String

  # All values greater than or equal the given value.
    name_gte: String

  # All values containing the given string.
    name_contains: String

  # All values not containing the given string.
    name_not_contains: String

  # All values starting with the given string.
    name_starts_with: String

  # All values not starting with the given string.
    name_not_starts_with: String

  # All values ending with the given string.
    name_ends_with: String

  # All values not ending with the given string.
    name_not_ends_with: String
  password: String

  # All values that are not equal to given value.
    password_not: String

  # All values that are contained in given list.
    password_in: [String!]

  # All values that are not contained in given list.
    password_not_in: [String!]

  # All values less than the given value.
    password_lt: String

  # All values less than or equal the given value.
    password_lte: String

  # All values greater than the given value.
    password_gt: String

  # All values greater than or equal the given value.
    password_gte: String

  # All values containing the given string.
    password_contains: String

  # All values not containing the given string.
    password_not_contains: String

  # All values starting with the given string.
    password_starts_with: String

  # All values not starting with the given string.
    password_not_starts_with: String

  # All values ending with the given string.
    password_ends_with: String

  # All values not ending with the given string.
    password_not_ends_with: String
  updatedAt: String

  # All values that are not equal to given value.
    updatedAt_not: String

  # All values that are contained in given list.
    updatedAt_in: [String!]

  # All values that are not contained in given list.
    updatedAt_not_in: [String!]

  # All values less than the given value.
    updatedAt_lt: String

  # All values less than or equal the given value.
    updatedAt_lte: String

  # All values greater than the given value.
    updatedAt_gt: String

  # All values greater than or equal the given value.
    updatedAt_gte: String
}

type UserSubscriptionPayload {
  mutation: _ModelMutationType!
    node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}`
