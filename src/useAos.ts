import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll choreography system ("Catalogue × Counter" pack).
 * Replaces the AOS replica: reads [data-aos] hooks, animates transform/opacity
 * only, staggers sibling reveals, adds one parallax accent on the Wade section,
 * wires Lenis smooth scroll (native momentum on touch) and honours
 * prefers-reduced-motion (everything reduced to opacity-only, no transforms).
 */
export function useAos(): void {
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

    const lenis = new Lenis({ lerp: 0.1 })
    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const els = Array.from(document.querySelectorAll<HTMLElement>('[data-aos]'))
      const fromByType: Record<string, gsap.TweenVars> = {
        'fade-up': { y: 64 },
        'fade-down': { y: -64 },
        'fade-right': { x: -64 },
        'fade-left': { x: 64 },
        'zoom-out': { scale: 1.08 },
        'zoom-in': { scale: 0.9 },
      }

      els.forEach((el) => {
        const type = el.getAttribute('data-aos') ?? 'fade-up'
        const vars = fromByType[type] ?? { y: 64 }
        gsap.fromTo(
          el,
          { ...vars, autoAlpha: 0 },
          {
            ...vars,
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          },
        )
      })

      // Sibling stagger inside repeated containers (products, stats, gallery, testimonials)
      const staggerGroups = ['.Third-section', '.container', '.image-container', '.testimional']
      staggerGroups.forEach((sel) => {
        const group = document.querySelector(sel)
        if (!group) return
        gsap.from(Array.from(group.children), {
          y: 40,
          autoAlpha: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: group, start: 'top 85%', once: true },
        })
      })

      // Parallax accent on the "Wade." image (translateY only)
      const parallax = document.querySelector('.ninth-section img')
      if (parallax) {
        gsap.fromTo(
          parallax,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: {
              trigger: '.ninth-section',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          },
        )
      }
    })

    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set('[data-aos]', { clearProps: 'all', autoAlpha: 1 })
    })

    return () => {
      mm.revert()
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])
}
