/*
 * <#
 * .SYNOPSIS
 * <Overview of script>
 * .DESCRIPTION
 * <Brief description of script>
 * .PARAMETER <Parameter_Name>
 * <Brief description of parameter input required. Repeat this attribute if required>
 * .INPUTS
 * <Inputs if any, otherwise state None>
 * .OUTPUTS
 * <Outputs if anything is generated>
 * .NOTES
 *    Version:        0.1
 *    Author:         Muhanned Noman
 *    Creation Date:  Tuesday, January 28th 2020, 9:08:22 pm
 *    File: App.js
 *    Copyright (c) 2020 Muhanned Noman
 * HISTORY:
 * Date      	          By	Comments
 * ----------	          ---	----------------------------------------------------------
 * 
 * .COMPONENT
 *  Required Modules: 
 * 
 * .LICENSE
 * MIT License
 * 
 * Copyright (c) 2020 Your Company
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *  
 * 
 * #---------------------------------------------------------[Initialisations]--------------------------------------------------------
 * 
 * #---------------------------------------------------------[Variables]--------------------------------------------------------
 * 
 * #---------------------------------------------------------[Modules]--------------------------------------------------------
 * 
 * #---------------------------------------------------------[Functions]--------------------------------------------------------
 */

 const fs = require('fs');
 const readStream = fs.createReadStream('./example.txt','utf8');

 readStream.on('data',(chunk)=>{
    console.log(chunk);
 });