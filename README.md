<p align="center"> 
<img src="https://raw.githubusercontent.com/nerdvibe/lisk-rescue/master/banner.png">
  <br/>
  <strong>Recover funds from non conventional passphrases</strong>
</p>
<hr/>

## You have a non standard passphrase and your funds are locked? No problem!

The other day on the Lisk chat there was a user saying that he had a 15 words passphrase and Lisk Hub wouldn't allow to transfer the funds. We started to debug together and I built this tool for him.

This super simple tool allows you to transfer funds from a wallet, using any passphrase.

The script is nothing else than calling lisk-elements in order to sign the transaction and then broadcast it.

## Getting started

You will need a file editor, a terminal and have installed NodeJS. That's all.

- Open your terminal
- `git clone https://github.com/nerdvibe/lisk-rescue.git` 
- `cd lisk-rescue`
- Now open the file generate.js and add your details to the fields
- Double check that the receiver address is correct.
- `npm install`
- `node generate.js`
- Now copy the output (including the {}) into broadcast.js
- Triple check that the receiver is correct.
- execute broadcast.js by running `node broadcast.js`

Recomendations: For the first attempt, try with a ver low amount of LSK, e.g. 1 (which corresponds to 0.00000001 LSK)
