import { FormEvent } from 'react'
import { css } from '@emotion/react'
import { useForm } from 'react-hook-form'

export default function Form() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    console.log(typeof formData)

    // if use fetch
    // fetch('/some-api', { method: form.method, body: formData })

    const formJson = Object.fromEntries(formData.entries())
    alert(
      Object.entries(formJson)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n')
    )
  }

  return (
    <form css={formLayout} method="post" onSubmit={(e) => handleSubmit(e)}>
      {/* name */}
      <label css={formLabel}>
        Name
        <input type="text" name="name" css={formInput} placeholder="Anai Mon" />
      </label>

      {/* age */}
      <label css={formLabel}>
        Age
        <input type="number" name="age" css={formInput} placeholder="2" />
      </label>

      {/* gender */}
      <label css={formLabel}>
        Gender
        <select name="gender" css={formInput}>
          <option value="non">No answer</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <button type="submit">Send</button>
    </form>
  )
}

const formLabel = css`
  display: flex;
  flex-direction: column;
  gap: 1px;
`

const formInput = css`
  padding: 0.5rem;
`

const formLayout = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
