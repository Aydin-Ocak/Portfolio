/* Global Variables */
window.mobileBreakpoint = 1024;
window.preloaderDelay = 0;

/* Swiper */
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
/* EffectCreative, EffectCoverflow, EffectFade, Parallax, Grid, Thumbs */

window.Swiper = Swiper;
window.N = Navigation;
window.P = Pagination;
window.A = Autoplay;
/* window.EC = EffectCreative;
window.EF = EffectFade;
window.ECo = EffectCoverflow;
window.Px = Parallax;
window.G = Grid;
window.T = Thumbs;  */

/* GSAP */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
/* import ScrollToPlugin from 'gsap/ScrollToPlugin'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
import SplitText from 'gsap/SplitText'
import ScrollSmoother from 'gsap/ScrollSmoother' */

gsap.registerPlugin(ScrollTrigger); /* DrawSVGPlugin, ScrollToPlugin, SplitText, ScrollSmoother */

window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;

/* FancyBox */
import { Fancybox } from "@fancyapps/ui";
window.Fancybox = Fancybox;

/* JS Cookie */
import Cookies from 'js-cookie';
window.Cookies = Cookies;