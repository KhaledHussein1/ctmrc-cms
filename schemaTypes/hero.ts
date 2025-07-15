// sanity/schemas/hero.ts
import { defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Homepage Hero Section',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Image Alt Text',
      type: 'string',
    },
    {
      name: 'formTitle',
      title: 'Form Title',
      type: 'string',
    },
    {
      name: 'formDescription',
      title: 'Form Description',
      type: 'string',
    },
  ],
})
