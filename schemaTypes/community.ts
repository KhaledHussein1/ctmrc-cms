// sanity/schemas/communityPage.ts
import { defineType } from 'sanity'

export default defineType({
  name: 'communityPage',
  title: 'Community Page',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      validation: Rule => Rule.min(1),
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
    },
    {
      name: 'quoteAuthor',
      title: 'Quote Author',
      type: 'string',
    },
    {
      name: 'involvementPoints',
      title: 'Get Involved Points',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
})
