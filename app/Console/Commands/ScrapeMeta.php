<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Facades\App\Services\MetaScraperService;

class ScrapeMeta extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'scrape:meta {url}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Scrapes meta information from a URL';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $url = $this->argument('url');

        if (!$url) {
            $this->error('No URL supplied');
        }

        $data = MetaScraperService::scrape($url);

        dump($data);

        return 0;
    }
}