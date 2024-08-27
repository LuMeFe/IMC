import { Controller, Get, Post, Body, Render, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('imc')
export class ImcController {
  @Get()
  @Render('imc')
  getForm() {
    return {};
  }

  @Post()
  @Render('result')
  calculateImc(@Body() body: any) {
    const { Peso, Altura } = body;
    const imc = Peso / (Altura * Altura);
    let categoria = '';

    if (imc < 18.5) {
      categoria = 'Magreza';
    } else if (imc < 24.9) {
      categoria = 'Peso normal';
    } else if (imc < 29.9) {
      categoria = 'Sobrepeso';
    } else {
      categoria = 'Obeso';
    }

    return {
      imc: imc.toFixed(2),
      categoria,
      Peso,
      Altura
    };
  }
}
