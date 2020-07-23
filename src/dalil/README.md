# Dalil Module
Dalil module uses require in the XML-like components. To use please refer to the code below,
`<Dalil ayat='<ayat name>' soundFile={require('<ayat sound path>')} />`

Real world usage can be found in the chapter1.js file. The snippets of the code can be found below,
`<Dalil ayat='Testing' soundFile={require('./dalil-sound/test.mp3')} />`