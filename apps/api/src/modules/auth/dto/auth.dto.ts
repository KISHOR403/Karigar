import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'ismail.khatri@karigar.craft' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'SecretP@ss123' })
  @IsNotEmpty()
  @MinLength(6)
  password!: string;
}

export class RegisterDto {
  @ApiProperty({ example: 'ananya.sen@karigar.craft' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'SecretP@ss123' })
  @IsNotEmpty()
  @MinLength(8)
  password!: string;

  @ApiProperty({ example: 'Ananya' })
  @IsNotEmpty()
  firstName!: string;

  @ApiProperty({ example: 'Sen' })
  @IsNotEmpty()
  lastName!: string;

  @ApiProperty({ example: 'CUSTOMER', enum: ['CUSTOMER', 'ARTISAN'] })
  role?: 'CUSTOMER' | 'ARTISAN' = 'CUSTOMER';
}
