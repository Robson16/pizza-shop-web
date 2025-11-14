import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import * as zod from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpFormSchema = zod.object({
  restaurantName: zod.string().min(3),
  managerName: zod.string().min(3),
  phone: zod.string().min(10).max(11),
  email: zod.email(),
})

type SignUpFormInputs = zod.infer<typeof signUpFormSchema>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormInputs>({
    resolver: zodResolver(signUpFormSchema),
  })

  async function handleSignUp(data: SignUpFormInputs) {
    toast.promise<{ name: string }>(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ name: 'Event' }), 2000),
        ),
      {
        loading: 'Cadastrando...',
        success: 'Enviamos um link de confirmação para seu e-mail.',
        error: 'Falha no cadastro.',
      },
    )

    console.log(data)
  }

  return (
    <>
      <title>Cadastro | Pizza Shop</title>

      <div className="p-8">
        <Button variant="ghost" asChild className="absolute top-8 right-4">
          <Link to={'/sign-in'}>Fazer login</Link>
        </Button>

        <div className="flex w-[320px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta
            </h1>
            <p className="text-muted-foreground text-sm">
              Seja um parceiro e comece suas vendas
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" required {...register('email')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                required
                {...register('restaurantName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                required
                {...register('managerName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu telefone</Label>
              <Input id="phone" type="tel" required {...register('phone')} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              finalizar cadastro
            </Button>

            <p className="text-muted-foreground px-6 text-center text-sm leading-relaxed">
              Ao continuar, você concorda com nossos{' '}
              <a className="underline underline-offset-4" href="#">
                Termos de Serviços
              </a>{' '}
              e{' '}
              <a className="underline underline-offset-4" href="#">
                Politicas de Privacidade.
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
