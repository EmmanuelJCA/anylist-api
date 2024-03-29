import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SigninInput, SignupInput } from './dto/inputs';
import { AuthResponse } from './types/auth-response.type';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse, { name: 'signup' })
  signup(@Args('signupInput') signupInput: SignupInput): Promise<AuthResponse> {
    return this.authService.signup(signupInput);
  }

  @Mutation(() => AuthResponse, { name: 'signin' })
  signin(@Args('signinInput') signinInput: SigninInput): Promise<AuthResponse> {
    return this.authService.signin(signinInput);
  }

  // @Query(() => any, { name: 'revalidate' })
  // revalidateToken() {
  //   return this.authService.revalidateToken();
  // }
}
