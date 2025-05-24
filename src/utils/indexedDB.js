import { openDB } from 'idb'

const DB_NAME = 'sheetPJ'
const STORE_NAME = 'sheetData'

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' })
      }
    },
  })
}

export const saveSheetData = async (id, data) => {
  const db = await initDB()
  await db.put(STORE_NAME, { id, data })
}

export const loadSheetData = async (id) => {
  const db = await initDB()
  const result = await db.get(STORE_NAME, id)
  return result ? result.data : null
}
