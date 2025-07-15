import { defineType } from 'sanity'

export default defineType({
  name: 'galleryItem',
  title: 'Gallery Page',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Gallery Page Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
  ],
})
