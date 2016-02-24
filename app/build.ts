/**
 * Created by ryan on 2/23/16.
 */

export class Build {
    // Base components of a build.
    private _items: number[];
    private _actives: number[];
    private _consumables: number[];

    // @todo Replace the id number with the item class.
    public setItem(slot: number, id: number) {
        this._items[slot] = id;
    }

    get items() {
        return this._items;
    }

    // @todo Replace the id number with the consumable class.
    public setConsumable(slot: number, id: number) {
        this._consumables[slot] = id;
    }

    get consumables() {
        return this._consumables;
    }

    // @todo Replace the id number with the active class.
    public setActives(slot: number, id: number) {
        this._actives[slot] = id;
    }

    get actives() {
        return this._actives;    }

    get mana() {
        var mana = 0;
        for (var item in this._items) {
            mana = mana + item.mana;
        }
        return mana;
    }

    get manaRegen() {
        var manaRegen = 0;
        for (var item in this._items) {
            manaRegen = manaRegen + item.manaRegen;
        }
        return manaRegen;
    }

    get health() {
        var health = 0;
        for (var item in this._items) {
            health = health + item.health;
        }
        return health;
    }

    get healthRegen() {
        var healthRegen = 0;
        for (var item in this._items) {
            healthRegen = healthRegen + item.healthRegen;
        }
        return healthRegen;
    }

    get power() {
        var power = 0;
        for (var item in this._items) {
            power = power + item.power;
        }
        return power;
    }

    get critChance() {
        var critChance = 0;
        for (var item in this._items) {
            critChance = critChance + item.critChance;
        }
        return critChance;
    }

    get critDamage() {
        var critDamage = 0;
        for (var item in this._items) {
            critDamage = critDamage + item.critDamage;
        }
        return critDamage;
    }

    get physicalProtection() {
        var physicalProtection = 0;
        for (var item in this._items) {
            physicalProtection = physicalProtection + item.physicalProtection;
        }
        return physicalProtection;
    }

    get percentPhysicalPenetration() {
        var percentPhysicalPenetration = 0;
        for (var item in this._items) {
            percentPhysicalPenetration = percentPhysicalPenetration + item.percentPhysicalPenetration;
        }
        return percentPhysicalPenetration;
    }

    get flatPhysicalPenetration() {
        var flatPhysicalPenetration = 0;
        for (var item in this._items) {
            flatPhysicalPenetration = flatPhysicalPenetration + item.flatPhysicalPenetration;
        }
        return flatPhysicalPenetration;
    }

    get magicProtection() {
        var magicProtection = 0;
        for (var item in this._items) {
            magicProtection = magicProtection + item.magicProtection;
        }
        return magicProtection;
    }

    get flatMagicPenetration() {
        var flatMagicPenetration = 0;
        for (var item in this._items) {
            flatMagicPenetration = flatMagicPenetration + item.flatMagicPenetration;
        }
        return flatMagicPenetration;
    }

    get percentMagicPenetration() {
        var percentMagicPenetration = 0;
        for (var item in this._items) {
            percentMagicPenetration = percentMagicPenetration + item.percentMagicPenetration;
        }
        return percentMagicPenetration;
    }

    get cooldownReduction() {
        var cooldownReduction = 0;
        for (var item in this._items) {
            cooldownReduction = cooldownReduction + item.cooldownReduction;
        }
        return cooldownReduction;
    }

    get ccReduction() {
        var cooldownReduction = 0;
        for (var item in this._items) {
            cooldownReduction = cooldownReduction + item.cooldownReduction;
        }
        return cooldownReduction;
    }

    get lifeSteal() {
        var lifeSteal = 0;
        for (var item in this._items) {
            lifeSteal = lifeSteal + item.lifeSteal;
        }
        return lifeSteal;
    }

    get movementSpeed() {
        var movementSpeed = 0;
        for (var item in this._items) {
            movementSpeed = movementSpeed + item.movementSpeed;
        }
        return movementSpeed;
    }

    get attackSpeed() {
        var attackSpeed = 0;
        for (var item in this._items) {
            attackSpeed = attackSpeed + item.attackSpeed;
        }
        return attackSpeed;
    }
}
