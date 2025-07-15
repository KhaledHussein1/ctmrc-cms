// sanity/schemas/aboutPage.ts
import { defineType } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'intro',
      title: 'Intro Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'beliefsTitle',
      title: 'Beliefs Section Title',
      type: 'string',
    },
    {
      name: 'beliefs',
      title: 'Beliefs',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'string' },
        ],
      }],
    },
    {
      name: 'joinTitle',
      title: 'Join Us Title',
      type: 'string',
    },
    {
      name: 'joinText',
      title: 'Join Us Text',
      type: 'text',
    },
  ],
})
