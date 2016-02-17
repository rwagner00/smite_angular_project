/**
 * Created by ryan on 2/16/16.
 */

export class Character {
    public name: string;
    protected baseDamage: number;
    protected health: number;
    protected mana: number;
    protected attackSpeed: number;
    protected movementSpeed: number;
    protected physProtection: number;
    protected magicProtection: number;
    public damagePerLevel: number;
    public healthPerLevel: number;
    public healthRegen: number;
    public healthRegenPerLevel: number;
    public manaPerLevel: number;
    public manaRegen: number;
    public manaRegenPerLevel: number;
    public attackSpeedPerLevel: number;
    public magicProtectionPerLevel: number;
    public physProtectionPerLevel: number;
    public characterLevel: number;
    public damageMultiplier: number;


    constructor(name: string, baseDamage: number, damagepl: number, hp: number,
        hpPl: number, hpr: number, hprPl: number, mana: number, manaPl: number,
        manaReg: number, manaRegPl: number, attacksp: number, attackspPl: number,
        movementsp: number, magicProt: number, magicProtPl: number, physProt: number,
        physProtPl: number, damageType: string) {

        this.name = name;
        this.baseDamage = baseDamage;
        this.damagePerLevel = damagepl;
        this.health = hp;
        this.healthPerLevel = hpPl;
        this.healthRegen = hpr;
        this.healthRegenPerLevel = hprPl;
        this.mana = mana;
        this.manaPerLevel = manaPl;
        this.manaRegen = manaReg;
        this.manaRegenPerLevel = manaRegPl;
        this.attackSpeed = attacksp;
        this.attackSpeedPerLevel = attackspPl;
        this.movementSpeed = movementsp;
        this.magicProtection = magicProt;
        this.magicProtectionPerLevel = magicProtPl;
        this.physProtection = physProt;
        this.physProtectionPerLevel = physProtPl;

        this.characterLevel = 1;

        if(damageType == 'magic') {
            this.damageMultiplier = 0.20;
        }
        else {
            this.damageMultiplier = 1;
        }
    }

    getFlatPhysicalPenetration() {
        // Total up all flat physical penetration from all items.
        return 0;
    }
    getPercentPhysicalPenetration() {
        // Total up all percentage physical penetration from all items.
        return 0;
    }
    getFlatMagicPenetration() {
        // Total up all flat magical penetration from all items.
        return 0;
    }
    getPercentMagicPenetration() {
        // Total up all percentage magical penetration from all items.
        return 0;
    }

    getPower() {
        // Total up all the power from all the items.
        return 0;
    }

    getBaseAttackDamage() {
        return this.baseDamage + (this.damagePerLevel * this.characterLevel) + (this.getPower() * this.damageMultiplier);
    }


}
