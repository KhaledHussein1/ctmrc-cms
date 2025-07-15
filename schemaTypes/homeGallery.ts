// sanity/schemas/galleryItem.ts
import { defineType } from 'sanity'

export default defineType({
  name: 'homeGalleryItem',
  title: 'Homepage Gallery',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Gallery Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'showOnHomepage',
      title: 'Show on Homepage Carousel?',
      type: 'boolean',
    },
  ],
})
