gamemode spectator @s
playsound mob.wither.death @a
title @a title animm
tellraw @a {"rawtext":[{"text":"§5"},{"selector":"@s"},{"text":"§r§0>>> Ha sido eliminado"}]}
effect @a blindness 10 3
particle minecraft:explosion_manual ~ ~ ~