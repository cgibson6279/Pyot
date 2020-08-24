from .__core__ import PyotCore
from typing import List


# PYOT CORE OBJECTS

class ChampionRotation(PyotCore):
    free_champion_ids: List[int]
    free_newie_champion_ids: List[int]
    newie_max_level: int

    class Meta(PyotCore.Meta):
        raws = ["free_champion_ids", "free_newie_champion_ids"]
        renamed = {"free_champion_ids_for_new_players": "free_newie_champion_ids", "max_new_player_level": "newie_max_level"}

    def __init__(self, platform: str = None):
        self._lazy_set(locals())

    @property
    def free_champions(self) -> List["Champion"]:
        from .champion import Champion
        mutable = []
        for i in self.free_champion_ids:
            mutable.append(Champion(id=i, locale=self.to_locale(self.platform)))
        return mutable

    @property
    def free_newie_champions(self) -> List["Champion"]:
        from .champion import Champion
        mutable = []
        for i in self.free_newie_champion_ids:
            mutable.append(Champion(id=i, locale=self.to_locale(self.platform)))
        return mutable

