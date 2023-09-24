export class Class {
    pages = [];

    constructor(subject, season, year) {
        this.subject = subject;
        this.season = season;
        this.year = year;
    }
}

export class Page {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}

const class1 = new Class('Science', 'Fall', 2023);
class1.pages = [
    new Page('States of Matter', `Water can exist in three states at the same time. This is known as the triple boil—or triple point—and it is the temperature and pressure at which materials exist as a gas, a liquid, and a solid all at the same time.`),
    new Page('Radioactivity', `Bananas are radioactive. Bananas contain potassium, and because potassium decays, the yellow fruit becomes slightly radioactive.`)
]
const class2 = new Class('Math', 'Fall', 2023);
class2.pages = [
    new Page('Algebra', `Algebra is a branch of mathematics in which arithmetic operations and other formal manipulations are applied to abstract symbols rather than specific numbers. Geometry is the branch of mathematics that deals with the shape of objects, their spatial relations, and the properties of the space the objects are in.`),
    new Page('Trigonemetry', `The study of angles and of the angular relationships of planar and three-dimensional figures is known as trigonometry. The trigonometric functions (also called the circular functions) comprising trigonometry are the cosecant cscx, cosine cosx, cotangent cotx, secant secx, sine sinx, and tangent tanx. The inverses of these functions are denoted csc^(-1)x, cos^(-1)x, cot^(-1)x, sec^(-1)x, sin^(-1)x, and tan^(-1)x. Note that the f^(-1) notation here means inverse function, not f to the -1 power.`)
]
const class3 = new Class('History', 'Fall', 2023);
class3.pages = [
    new Page('Napoleon', `Napoleon Bonaparte (born Napoleone Buonaparte; 15 August 1769 – 5 May 1821), later known by his regnal name Napoleon I, was a French military commander and political leader who rose to prominence during the French Revolution and led successful campaigns during the Revolutionary Wars.`),
    new Page('King Henry III', `Henry III (1 October 1207 – 16 November 1272), also known as Henry of Winchester, was King of England, Lord of Ireland, and Duke of Aquitaine from 1216 until his death in 1272. The son of King John and Isabella of Angoulême, Henry assumed the throne when he was only nine in the middle of the First Barons' War. Cardinal Guala Bicchieri declared the war against the rebel barons to be a religious crusade and Henry's forces, led by William Marshal, defeated the rebels at the battles of Lincoln and Sandwich in 1217.`),
    new Page('Quetzalcoatl', `Quetzalcoatl is a deity in Aztec culture and literature. Among the Aztecs, he was related to wind, Venus, Sun, merchants, arts, crafts, knowledge, and learning. He was also the patron god of the Aztec priesthood.[5] He was one of several important gods in the Aztec pantheon, along with the gods Tlaloc, Tezcatlipoca and Huitzilopochtli. The two other gods represented by the planet Venus are Tlaloc (ally and the god of rain) and Xolotl (psychopomp and its twin).`)
]

export const defaultState = {
    classes: [class1, class2, class3],
    class: 1,
    page: 1
}