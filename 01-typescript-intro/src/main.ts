import './style.css'
//import './topics/1-basic-types.ts'
//import './topics/02-object-interface.ts'
//import './topics/03-functions.ts'
//import './topics/04-homework-types.ts'
import './topics/05-basic-destructuring.ts'

import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hola Mundo
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
