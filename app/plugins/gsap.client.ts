import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

export default defineNuxtPlugin(() => {
  document.documentElement.classList.add('has-js')
  gsap.registerPlugin(CustomEase, ScrambleTextPlugin, ScrollTrigger, SplitText)
  CustomEase.create('editorial', '0.22, 1, 0.36, 1')
})
