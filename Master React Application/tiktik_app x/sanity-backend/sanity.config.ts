import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/schema.js'
// import createSchema from './schemas/schema.js'


export default defineConfig({
  name: 'default',
  title: 'sanity-backend',

  projectId: 'ev5qdpq6',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
