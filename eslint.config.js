// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
  },
  {
    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-vars': 'off',
      'ts/no-unused-vars': 'off',
    },
  },
)
