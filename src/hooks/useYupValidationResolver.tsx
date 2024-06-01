import { useCallback } from 'react'
import { FieldValues, Resolver, ResolverResult } from 'react-hook-form'
import { AnyObjectSchema, ValidationError } from 'yup'

const useYupValidationResolver = (
  validationSchema: AnyObjectSchema
): Resolver<FieldValues> =>
  useCallback(
    async (data: FieldValues): Promise<ResolverResult<FieldValues>> => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        })

        return {
          values,
          errors: {},
        }
      } catch (err) {
        const errors = err as ValidationError
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path!]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {} as Record<string, any>
          ),
        }
      }
    },
    [validationSchema]
  )
export { useYupValidationResolver }
