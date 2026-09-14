// @ts-nocheck
import { world, system, Player, ItemStack, GameMode, EntityEquippableComponent, EquipmentSlot } from "@minecraft/server";




world.afterEvents.itemCompleteUse.subscribe(ev => {
    if (ev.itemStack.typeId === 'bridge:amuleto_berserker') {
        ev.source.runCommand('function amuleto_berserker')
    }
});


world.afterEvents.itemCompleteUse.subscribe(ev => {
    if (ev.itemStack.typeId === 'bridge:amuleto_speed') {
        ev.source.runCommand('function amuleto_speed')
    }
});

world.afterEvents.itemCompleteUse.subscribe(ev => {
    if (ev.itemStack.typeId === 'bridge:cake_blue') {
        ev.source.addEffect("minecraft:absorption", 1700, { amplifier: 7 });
        ev.source.addEffect("minecraft:fire_resistance", 1700, { amplifier: 1 });
        ev.source.addEffect("minecraft:resistance", 1200, { amplifier: 2 });
        ev.source.addEffect("minecraft:regeneration", 20, { amplifier: 4 });
        ev.source.addEffect("minecraft:speed", 350, { amplifier: 3 })
    }
});

// world.afterEvents.itemCompleteUse.subscribe(ev => {
// if (ev.itemStack.typeId === 'bridge:medic_in_a_jar') {
//  ev.source.addEffect("minecraft:instant_health", 0.1, { amplifier: 3 });
///ev.source.runCommand('effect @s clear wither');
//ev.source.runCommand('effect @s clear darkness');
//ev.source.runCommand('effect @s clear slowness');
//ev.source.runCommand('effect @s clear mining_fatigue');
//ev.source.runCommand('effect @s clear blindness');
//ev.source.runCommand('effect @s clear poison')
//})

world.afterEvents.itemCompleteUse.subscribe(ev => {
    if (ev.itemStack.typeId === 'bridge:infernal_blessing') {
        ev.source.addEffect("minecraft:resistance", 100, { amplifier: 6 })
    }
})
