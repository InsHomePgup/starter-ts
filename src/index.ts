export const one = 1
export const two = 2
export const three: number = 3
type strType = string
const name: strType = '123'

class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

const a = new Animal('Jack')

function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  }
  else {
    return x.split('').reverse().join('')
  }
}

interface Alarm {
  price: number
}
interface Alarm {
  weight: number
}

const alarm: Alarm = {
  price: 1,
  weight: 2,
}

type AlarmWithoutWeight = Omit<Alarm, 'weight'> // 移除单个属性

const alarmC: AlarmWithoutWeight = {
  price: 1,
}

type AlarmExtra = AlarmWithoutWeight & { date: Date } & { mode?: 'modeOne' } // 添加属性然后重命名这个分类
type AlarmExtraPlus = AlarmExtra & { outTime: Date } // 添加属性

const alarmD: AlarmExtra = {
  price: 1,
  date: new Date(),
}

type AlarmMini = Omit<AlarmExtraPlus, 'mode' | 'date' | 'outTime'> // 移除多个属性
const alarmE: AlarmMini = { price: 10 }

type AlarmOptional = Partial<AlarmExtra> // make all properties optional  设置所有属性都是可选的

const alarmF: AlarmOptional = {}
