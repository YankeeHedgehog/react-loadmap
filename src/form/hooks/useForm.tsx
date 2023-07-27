import { FormEvent } from 'react'

export default function useForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    // if use fetch
    // fetch('/some-api', { method: form.method, body: formData })

    const formJson = Object.fromEntries(formData.entries())
    alert(
      Object.entries(formJson)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n')
    )
  }

  return { handleSubmit }
}
