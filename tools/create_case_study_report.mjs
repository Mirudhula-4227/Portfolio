import { writeFile } from 'node:fs/promises'
import {
  AlignmentType,
  BorderStyle,
  Document,
  ExternalHyperlink,
  Footer,
  Header,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
} from 'docx'

const navy = '10231F'
const mint = '16846A'
const grey = '62716B'
const body = '26332E'

const paragraph = (text, options = {}) => new Paragraph({
  children: [new TextRun({ text, font: 'Aptos', size: 20, color: body })],
  spacing: { after: 130, line: 280 },
  ...options,
})

const heading = (text) => new Paragraph({
  text,
  heading: HeadingLevel.HEADING_1,
  spacing: { before: 240, after: 90 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'D5E6DC', space: 5 } },
})

const bullet = (label, detail) => new Paragraph({
  children: [
    new TextRun({ text: label, bold: true, font: 'Aptos', size: 20, color: navy }),
    new TextRun({ text: detail, font: 'Aptos', size: 20, color: body }),
  ],
  bullet: { indent: 360 },
  spacing: { after: 85, line: 270 },
})

const reference = (label, url, purpose) => new Paragraph({
  children: [
    new ExternalHyperlink({
      link: url,
      children: [new TextRun({ text: label, style: 'Hyperlink', font: 'Aptos', size: 20, color: mint, underline: {} })],
    }),
    new TextRun({ text: ` — ${purpose}`, font: 'Aptos', size: 20, color: body }),
  ],
  bullet: { indent: 360 },
  spacing: { after: 70, line: 260 },
})

const children = [
  new Paragraph({
    children: [new TextRun({ text: 'PORTFOLIO  /  CASE STUDY', font: 'Aptos', size: 18, bold: true, color: mint, characterSpacing: 25 })],
    spacing: { before: 170, after: 120 },
  }),
  new Paragraph({
    children: [new TextRun({ text: 'Under Open Skies', font: 'Aptos Display', size: 56, bold: true, color: navy })],
    spacing: { after: 60 },
  }),
  new Paragraph({
    children: [new TextRun({ text: 'A personal portfolio by Mirudhula', font: 'Aptos', size: 26, color: grey })],
    spacing: { after: 250 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 18, color: mint, space: 9 } },
  }),

  heading('1. Portfolio Name & Concept'),
  paragraph('Under Open Skies is a personal portfolio inspired by the aurora borealis. A deep night-sky background, softly glowing green-blue ribbons, stars, and a mountain-horizon illustration create a calm setting for presenting Mirudhula’s skills and projects. The concept aims to feel thoughtful, curious, and creative while keeping the work clear and easy to explore.'),

  heading('2. Pages & Sections'),
  paragraph('The portfolio is a single-page website with navigation tabs that jump to each section. This keeps the experience straightforward while giving each required area a clear place.', { spacing: { after: 100, line: 280 } }),
  bullet('Home / Hero — ', 'Introduces Mirudhula and the aurora theme, with links that guide visitors to the work and introduction.'),
  bullet('About — ', 'Shares a short personal profile and interests, helping visitors understand the person behind the projects.'),
  bullet('Skills — ', 'Groups design, development, and toolkit skills so capabilities can be scanned quickly.'),
  bullet('Projects — ', 'Showcases three applications with brief summaries: SOS Disaster Management App focuses on access to alerts, emergency requests, and response information; Spec to RTL Conversion Application explores turning hardware specifications into RTL; VeriMed Application focuses on easier access to medical information and verification. Add the actual technologies used for each project before submission.'),
  bullet('Contact — ', 'Provides a direct email action and visible address: mirudhulabm@gmail.com.'),
  bullet('Footer — ', 'Provides a simple closing signature and a back-to-top link.'),

  heading('3. References'),
  reference('React — Learn React', 'https://react.dev/learn', 'Component-based interface and state.'),
  reference('Vite — Getting Started', 'https://vite.dev/guide/', 'Development server and production build workflow.'),
  reference('MDN — Using CSS animations', 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations', 'CSS keyframes and animation concepts.'),
  reference('MDN — prefers-reduced-motion', 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion', 'Accessibility guidance for motion preferences.'),
  reference('Google Fonts', 'https://fonts.google.com/', 'DM Sans, Manrope, and DM Mono typefaces.'),
  paragraph('The aurora color palette, layout, and decorative CSS illustration were created for this portfolio concept.'),

  heading('4. Tech Stack'),
  bullet('React — ', 'Builds the interface from reusable components and manages the mobile navigation state.'),
  bullet('TypeScript — ', 'Adds static type checking to the React application.'),
  bullet('Vite — ', 'Provides the local development server and bundles the production website.'),
  bullet('HTML and CSS — ', 'Provide semantic page structure, responsive styling, illustrated project cards, and visual effects.'),
  bullet('Google Fonts — ', 'Manrope for display headings, DM Sans for body copy, and DM Mono for labels.'),

  heading('5. Animations & Interactions'),
  bullet('Aurora — ', 'Two blurred color ribbons drift slowly behind the hero using CSS keyframe animations.'),
  bullet('Atmospheric details — ', 'Star points and the small portfolio mark add visual texture; the mark rotates slowly.'),
  bullet('Project cards — ', 'Artwork symbols rotate and scale, and project arrows shift on hover.'),
  bullet('Buttons and navigation — ', 'Buttons lift slightly on hover, links change color, and the mobile menu opens and closes accessibly.'),
  bullet('Reduced motion — ', 'The prefers-reduced-motion media query minimizes decorative motion for visitors who request it.'),

  heading('6. Learning Outcomes'),
  paragraph('This project provided practice in translating a visual concept into a consistent web experience through color, type, layout, and CSS illustration. It also brought together responsive design, React and TypeScript, semantic HTML, keyboard focus states, mobile navigation, and reduced-motion accessibility. The project reinforced the importance of concise project storytelling and making contact information easy to find.'),

  heading('Submission Links'),
  bullet('Live website: ', '[Add your deployed website URL — the current localhost preview is not publicly accessible.]'),
  bullet('GitHub: ', '[Add your repository URL if you publish the project; otherwise this is optional.]'),
  new Paragraph({
    children: [
      new TextRun({ text: 'Before submitting: ', bold: true, font: 'Aptos', size: 18, color: mint }),
      new TextRun({ text: 'replace the submission link placeholders and add the actual technology stack used for each project.', font: 'Aptos', size: 18, color: grey }),
    ],
    spacing: { before: 120, after: 0 },
  }),
]

const doc = new Document({
  creator: 'Mirudhula',
  title: 'Under Open Skies — Portfolio Case Study',
  subject: 'Portfolio design and development report',
  styles: {
    default: {
      document: { run: { font: 'Aptos', size: 20, color: body }, paragraph: { spacing: { after: 100 } } },
      heading1: { run: { font: 'Aptos Display', size: 34, bold: true, color: navy }, paragraph: { spacing: { before: 220, after: 100 } } },
    },
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 900, right: 1050, bottom: 850, left: 1050 },
      },
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: 'MIRUDHULA  /  PORTFOLIO CASE STUDY', font: 'Aptos', size: 16, bold: true, color: grey })],
        border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: 'D5E6DC', space: 5 } },
      })] }),
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: 'UNDER OPEN SKIES  •  2026', font: 'Aptos', size: 16, color: grey })],
      })] }),
    },
    children,
  }],
})

const buffer = await Packer.toBuffer(doc)
await writeFile('CASE_STUDY_REPORT.docx', buffer)
console.log('Created CASE_STUDY_REPORT.docx')
