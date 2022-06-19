import { Body, Controller, DefaultValuePipe, Get, Inject, Post, Query} from '@nestjs/common';
import { get } from 'http';
import { ChainId, Token, WETH, Fetcher, Route, TokenAmount } from "@uniswap/sdk";
import {UniswapService} from '../Services/uniswapProvider.service'


@Controller('/api/v1')
export class UniswapController {
    private readonly uniswapProvider: UniswapService

    public constructor(@Inject(UniswapService) uniswapProvider: UniswapService){
        this.uniswapProvider = uniswapProvider
    }
    @Get('/token/swap-amount')
    public async tokenPrice(
        @Query('tokenAmountFrom', new DefaultValuePipe(undefined)) tokenAmountFrom: number,
        @Query('tokenFrom', new DefaultValuePipe(undefined)) tokenFrom: string,
        @Query('tokenTo', new DefaultValuePipe(undefined)) tokenTo: string,

    ) {
        console.log("aaaa:", tokenAmountFrom)
        return this.uniswapProvider.calculatePrice("kovan", tokenAmountFrom, tokenFrom, tokenTo);
        
    }
}