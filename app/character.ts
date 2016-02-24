/**
 * Created by ryan on 2/16/16.
 */

export class Character {
    name: string;
    private baseDamage: number;
    private health: number;
    private mana: number;
    private attackSpeed: number;
    private movementSpeed: number;
    private physProtection: number;
    private magicProtection: number;
    damagePerLevel: number;
    healthPerLevel: number;
    healthRegen: number;
    healthRegenPerLevel: number;
    manaPerLevel: number;
    manaRegen: number;
    manaRegenPerLevel: number;
    attackSpeedPerLevel: number;
    magicProtectionPerLevel: number;
    physProtectionPerLevel: number;
    characterLevel: number;
    damageMultiplier: number;

    //@todo Replace monstrous constructor with a few methods using grouped attributes.
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
