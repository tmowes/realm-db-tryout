/* eslint-disable @typescript-eslint/no-explicit-any */
import Realm from 'realm'

import RepositorySchema from '../schema/RepositorySchema'

const getRealm = (): any => {
  return Realm.open({
    schema: [RepositorySchema],
  })
}

export default getRealm
