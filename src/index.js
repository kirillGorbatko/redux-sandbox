import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import { inc, dec, rndp, rndm } from './actions';
import './index.css'

const $decButton = document.getElementById('dec');
const $incButton = document.getElementById('inc');
const $randomPlusButton = document.getElementById('rndp');
const $randomMinusButton = document.getElementById('rndm');
const $counter  = document.getElementById('counter');

const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;

const {incDispatch, decDispatch, rndpDispatch, rndmDispatch} = bindActionCreators({
	incDispatch: inc,
	decDispatch: dec,
	rndpDispatch: rndp,
	rndmDispatch: rndm,
}, dispatch);

$decButton.addEventListener('click', decDispatch);
$incButton.addEventListener('click', incDispatch);
$randomPlusButton.addEventListener('click', () => {
	const payload = Math.floor(Math.random()*10);
	rndpDispatch(payload);
});
$randomMinusButton.addEventListener('click', () => {
	const payload = Math.floor(Math.random()*10);
	rndmDispatch(payload);
});

const update = () => $counter.innerHTML = getState();
subscribe(update);