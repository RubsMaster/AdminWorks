<?php

use empleaDos\Entities\Languages;
use Faker\Generator;

class LanguageTableSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function getModel()
    {
        return new Languages();
    }

    public function getDummyData(Generator $faker, array  $customValues =array())
    {   	
        return [
                'user_id' => $this->getRandom('User')->id,
                'idioma' => $faker->randomElement(['Espa�ol','Ingl�s','Frances','Italiano','Portugu�s']),
        	    'idioma_nivel' => $faker->randomElement(['Nativo','Muy B�sico','B�sico','Intermedio','Avanzado']),
            ];
    }

    public function run()
    {
       $this->createMultiple(50);
    }
}
