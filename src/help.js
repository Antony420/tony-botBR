const help = (prefix) => {
	return `> * Comandos de adesivos * <
 comando: * $ {prefix} adesivo * ou * $ {prefix} adesivo *
 desc: converter imagem / gif / vídeo em adesivo
 uso: responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda \n
 comando: * $ {prefix} adesivo nobg * ou * $ {prefix} adesivo nobg *
 desc: converte imagem em adesivo enquanto remove o fundo
 uso: responder imagem ou enviar imagem com legenda \n
 comando: * $ {prefix} toimg *
 desc: converter adesivo em imagem
 uso: adesivo de resposta \n
 comando: * $ {prefix} tsticker * ou * $ {prefix} tsticker *
 desc: converter texto em adesivo
 uso: * $ {prefix} texto tsticker aqui * \n
 > * Comandos Meme * <
 comando: * $ {prefix} meme *
 desc: imagens aleatórias de meme [inglês]
 uso: basta enviar o comando \n
 comando: * $ {prefix} memeindo *
 desc: imagens meme aleatórias [indo]
 uso: basta enviar o comando \n
 > * Outros comandos * <
 comando: * $ {prefix} gtts *
 desc: converter texto em fala / áudio
 uso: * $ {prefix} gtts [cc] [texto] * \nexemplo: * $ {prefix} gtts ja On2-chan * \n
 comando: * $ {prefix} loli *
 desc: imagens aleatórias de loli
 uso: basta enviar o comando \n
 comando: * $ {prefix} nsfwloli *
 desc: imagens aleatórias de nsfw loli
 uso: basta enviar o comando \n
 comando: * $ {prefix} url2img *
 desc: faz capturas de tela da web
 uso: * $ {prefix} url2img [type] [url] * \n
 comando: * $ {prefix} simi *
 desc: sua mensagem será respondida por simi
 uso: * $ {prefix} simi yourmessage * \n
 comando: * $ {prefix} ocr *
 desc: tira o texto da imagem
 uso: responder imagem ou enviar imagem com legenda \n
 comando: * $ {prefix} esperar *
 desc: pesquisar anime com imagem [What Anime Is This / That]
 uso: responder imagem ou enviar imagem com legenda \n
 comando: * $ {prefix} setprefix *
 desc: substituir prefixo
 uso: * $ {prefix} setprefix [texto | opcional] * \ nexemplo: * $ {prefix} setprefix? *
 nota: este comando só pode ser usado pelo proprietário do bot \n
> * Comandos do Grupo * <
 comando: * $ {prefix} add *
 desc: adicionar membro ao grupo
 uso: * $ {prefix} add 62813xxxxx * \ n
 observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin! \ n
 comando: * $ {prefix} kick *
 desc: expulsar membros do grupo
 uso: * $ {prefix} kick @ tagmember * \ n
 observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin! \ n
 comando: * $ {prefix} promova *
 desc: tornar o membro do grupo como administrador do grupo
 uso: * $ {prefix} promova @ tagmember * \ n
 observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin! \ n
 comando: * $ {prefix} rebaixar *
 desc: tornar o administrador do grupo como membro do grupo
 uso: * $ {prefix} rebaixar @ tagmember * \ n
 observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin! \ n
 comando: * $ {prefix} grupo de links *
 desc: pegue o link do grupo
 uso: basta enviar o comando
 observação: só pode ser usado quando o bot se torna admin e quem envia o comando é admin! \ n
 comando: * $ {prefix} tagall *
 desc: marca todos os membros do grupo, incluindo administradores também
 uso: basta enviar o comando
 nota: este comando pode ser usado se você for um administrador de grupo \ n
 comando: * $ {prefix} simih *
 desc: ativa o modo simi no grupo
 uso: * $ {prefix} simih 1 * para ativar o modo simi e * $ {prefix} simih 0 * para desativar o modo simi
 nota: este comando pode ser usado se você for um administrador de grupo \n`
}

exports.help = help
