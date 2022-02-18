import { button } from '../components/keyboard/keyboard.style';
export interface keyboardProps{
    letter:string;
    style:"letterNormal" | "letterPlayed" | "letterCorrect" | "letterWarning";
}
export const keyboardLine1:keyboardProps[] = [
{letter:"Q",style:"letterNormal"},
{letter:"W",style:"letterNormal"},
{letter:"E",style:"letterNormal"},
{letter:"R",style:"letterNormal"},
{letter:"T",style:"letterNormal"},
{letter:"Y",style:"letterNormal"},
{letter:"U",style:"letterNormal"},
{letter:"I",style:"letterNormal"},
{letter:"O",style:"letterNormal"},
{letter:"P",style:"letterNormal"},
];
export const keyboardLine2:keyboardProps[] = [
    {letter:"A",style:"letterNormal"},
    {letter:"S",style:"letterNormal"},
    {letter:"D",style:"letterNormal"},
    {letter:"F",style:"letterNormal"},
    {letter:"G",style:"letterNormal"},
    {letter:"H",style:"letterNormal"},
    {letter:"J",style:"letterNormal"},
    {letter:"K",style:"letterNormal"},
    {letter:"L",style:"letterNormal"},
    {letter:"Ñ",style:"letterNormal"},
    ];

    export const keyboardLine3:keyboardProps[] = [
        {letter:"Z",style:"letterNormal"},
        {letter:"X",style:"letterNormal"},
        {letter:"C",style:"letterNormal"},
        {letter:"V",style:"letterNormal"},
        {letter:"B",style:"letterNormal"},
        {letter:"N",style:"letterNormal"},
        {letter:"M",style:"letterNormal"},
        ];