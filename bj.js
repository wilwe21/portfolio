const cards = ['🂡','🂢','🂣','🂤','🂥','🂦','🂧','🂨','🂩','🂪','🂫','🂭','🂮','🂱','🂲','🂳','🂴','🂵','🂶','🂷','🂸','🂹','🂺','🂻','🂽','🂾','🃁','🃂','🃃','🃄','🃅','🃆','🃇','🃈','🃉','🃊','🃋','🃍','🃎','🃑','🃒','🃓','🃔','🃕','🃖','🃗','🃘','🃙','🃚','🃛','🃝','🃞']
const Player = ['🃝','🃞']
const Dealer = ['🃚','🃛']
const Update = () => {
    document.getElementById('Player').innerHTML = Player.join('')
    document.getElementById('Dealer').innerHTML = Dealer.join('')
}
const Ptake = () => {
    Player.push('chuj')
}
