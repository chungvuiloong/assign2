<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TweeterController extends AbstractController
{
    #[Route('/', name: 'app_tweeter')]
    public function index(): Response
    {
        return $this->render('tweeter/index.html.twig');
    }
}
