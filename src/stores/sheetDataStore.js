import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = 'http://localhost:5000/api/sheet'

export const dowerMapping = {
  con: ['agil', 'end', 'strg', 'rap', 'ref', 'spd'],
  int: ['clev', 'conc', 'ing', 'wisd', 'tem', 'will'],
  per: ['emp', 'seek', 'dizz', 'sigh'],
  car: ['pret', 'man', 'sec', 'ac'],
  hab: ['art', 'des'],
}

export const useSheetDataStore = defineStore('sheetData', {
  state: () => ({
    sheetData: {
      atr: {
        level: 1,
        xpInsert: 0,
        xpReach: 0,
        atrPoints: 0.3,
        devInsert: 0,
        devotion: 0,
        attributes: {
          con: 0,
          int: 0,
          per: 0,
          car: 0,
          hab: 0,
          psi: 0,
          esp: 0,
        },
        dower: {
          agil: 0,
          end: 0,
          strg: 0,
          rap: 0,
          ref: 0,
          spd: 0,
          clev: 0,
          conc: 0,
          ing: 0,
          wisd: 0,
          tem: 0,
          will: 0,
          emp: 0,
          seek: 0,
          dizz: 0,
          sigh: 0,
          pret: 0,
          man: 0,
          sec: 0,
          ac: 0,
          art: 0,
          des: 0,
        },
        wounds: [{ id: 1, name: '', stadium: 0, grade: 1 }],
        deityName: '',
        dp: 0,
        luckSelect: '',
        luck: 0,
        capCon: 0,
        plusCon: 0,
        capInt: 0,
        plusInt: 0,
        capPer: 0,
        plusPer: 0,
        capCar: 0,
        plusCar: 0,
        capHab: 0,
        plusHab: 0,
        capPsi: 0,
        plusPsi: 0,
        capEsp: 0,
        plusEsp: 0,
        plusReg: 0,
        regSelect: '',
        karmaGood: 0,
        karmaEvil: 0,
      },
      dtPoints: {
        con: 0,
        int: 0,
        per: 0,
        car: 0,
        hab: 0,
      },
    },
  }),

  actions: {
    async loadSheet(userId) {
      try {
        const res = await axios.get(`${API_URL}/load`)
        this.sheetData = res.data
      } catch (error) {
        console.error('Failed loading data form server:', error)
      }
    },

    async saveSheet() {
      try {
        await axios.post(`${API_URL}/save`, { sheetData: this.sheetData })
      } catch (error) {
        console.error('Failed saving sheet in server')
      }
    },
  },
})
