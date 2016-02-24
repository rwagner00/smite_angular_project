/**
 * Created by ryan on 2/23/16.
 */

export class item {

    //@todo Add setters based on property groups.

    public itemName: string;
    public itemID: number;

    // Attributes gained from build.
    private _mana: number;
    private _manaRegen: number;
    private _health: number;
    private _healthRegen: number;
    private _power: number;
    private _critChance: number;
    private _critDamage: number;
    private _physicalProtection: number;
    private _percentPhysicalPenetration: number;
    private _flatPhysicalPenetration: number;
    private _magicProtection: number;
    private _flatMagicPenetration: number;
    private _percentMagicPenetration: number;
    private _cooldownReduction: number;
    private _ccReduction: number;
    private _lifeSteal: number;
    private _movementSpeed: number;
    private _attackSpeed: number;

    // Stacking item info.
    private _stackingItem: boolean;
    private _stacks: number;
    private _maxStacks: number;
    private _stackingAttributes: string[];
    private _stackingValue: number[];

    constructor(itemID: number, itemName: string) {

    }

    get stackingItem():boolean {
        return this._stackingItem;
    }

    set stackingItem(value:boolean) {
        this._stackingItem = value;
    }

    get stacks():number {
        return this._stacks;
    }

    set stacks(value:number) {
        this._stacks = value;
    }

    get maxStacks():number {
        return this._maxStacks;
    }

    set maxStacks(value:number) {
        this._maxStacks = value;
    }

    get stackingAttributes():string[] {
        return this._stackingAttributes;
    }

    set stackingAttributes(value:Array) {
        this._stackingAttributes = value;
    }

    get stackingValue():number[] {
        return this._stackingValue;
    }

    set stackingValue(value:Array) {
        this._stackingValue = value;
    }

    get mana():number {
        return this._mana;
    }

    get manaRegen():number {
        return this._manaRegen;
    }

    get health():number {
        return this._health;
    }

    get healthRegen():number {
        return this._healthRegen;
    }

    get power():number {
        return this._power;
    }

    get critChance():number {
        return this._critChance;
    }

    get critDamage():number {
        return this._critDamage;
    }

    get physicalProtection():number {
        return this._physicalProtection;
    }

    get percentPhysicalPenetration():number {
        return this._percentPhysicalPenetration;
    }

    get flatPhysicalPenetration():number {
        return this._flatPhysicalPenetration;
    }

    get magicProtection():number {
        return this._magicProtection;
    }

    get flatMagicPenetration():number {
        return this._flatMagicPenetration;
    }

    get percentMagicPenetration():number {
        return this._percentMagicPenetration;
    }

    get cooldownReduction():number {
        return this._cooldownReduction;
    }

    get ccReduction():number {
        return this._ccReduction;
    }

    get lifeSteal():number {
        return this._lifeSteal;
    }

    get movementSpeed():number {
        return this._movementSpeed;
    }

    get attackSpeed():number {
        return this._attackSpeed;
    }
}
