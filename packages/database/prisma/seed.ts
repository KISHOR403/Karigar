import { PrismaClient, Role, ProductStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.info('🌱 Seeding Karigar database with authentic master artisan lineages...');

  // Clean existing seed tables safely in order
  await prisma.auditLog.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.customOrderRequest.deleteMany();
  await prisma.shipment.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.review.deleteMany();
  await prisma.wishlist.deleteMany();
  await prisma.follow.deleteMany();
  await prisma.collectionProduct.deleteMany();
  await prisma.collection.deleteMany();
  await prisma.productTag.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.productVideo.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.artisanCategory.deleteMany();
  await prisma.artisanMedia.deleteMany();
  await prisma.artisanVerification.deleteMany();
  await prisma.artisanLocation.deleteMany();
  await prisma.artisanProfile.deleteMany();
  await prisma.userProfile.deleteMany();
  await prisma.user.deleteMany();
  await prisma.category.deleteMany();

  // 1. Categories
  const textilesCat = await prisma.category.create({
    data: {
      name: 'Textiles & Handloom',
      slug: 'textiles-handloom',
      description: 'Hand-spun fibers, botanical indigo resist, natural dyes, and heritage looms.',
      imageUrl: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1200&auto=format&fit=crop',
    },
  });

  const metalCat = await prisma.category.create({
    data: {
      name: 'Metals & Forge',
      slug: 'metals-forge',
      description: 'Lost-wax casting, bell metal metallurgy, and hand-beaten brassware.',
      imageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1200&auto=format&fit=crop',
    },
  });

  const ceramicCat = await prisma.category.create({
    data: {
      name: 'Clay & Ceramics',
      slug: 'clay-ceramics',
      description: 'Quartz-ground Jaipur blue pottery, terracotta urns, and studio stoneware.',
      imageUrl: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1200&auto=format&fit=crop',
    },
  });

  const woodCat = await prisma.category.create({
    data: {
      name: 'Turned Wood & Lacquer',
      slug: 'turned-wood-lacquer',
      description: 'Aale mara timber turned on precision manual lathes and colored with natural shellac.',
      imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop',
    },
  });

  // 2. Users & Artisan Profiles
  // Artisan 1: Dr. Ismail Mohammad Khatri (Ajrakhpur, Kutch)
  const ismailUser = await prisma.user.create({
    data: {
      email: 'ismail.khatri@karigar.craft',
      passwordHash: '$2b$10$ep5s6h5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8',
      role: Role.ARTISAN,
      isVerified: true,
      profile: {
        create: {
          firstName: 'Ismail',
          lastName: 'Khatri',
          phoneNumber: '+919825012345',
          bio: '9th generation Ajrakh master printer holding a doctorate from De Montfort University for reviving natural indigo, madder, and pomegranate rind block printing.',
          city: 'Ajrakhpur',
          state: 'Gujarat',
          avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
        },
      },
    },
  });

  const ismailProfile = await prisma.artisanProfile.create({
    data: {
      userId: ismailUser.id,
      artisanName: 'Dr. Ismail Mohammad Khatri',
      slug: 'ismail-khatri-ajrakh',
      craftName: '16-Stage Natural Dye Ajrakh Block Printing',
      heritageLineage: '9th Generation Khatri Community Lineage (Kutch)',
      experienceYears: 42,
      tagline: 'Preserving the cosmic geometry of indigo, harda, and iron-rust printing.',
      bio: 'Born into the Khatri community of Dhamadka, Ismail Khatri revitalized ancestral natural dyeing techniques after the devastating 2001 Bhuj earthquake, founding Ajrakhpur village as an artisan sanctuary.',
      story: `The word Ajrakh originates from 'Azrak', the Arabic word for blue, as well as the Kutchi expression 'Aaj ke din rakh' (keep it for today). 

Our craft does not rush. A single piece of genuine Ajrakh journeys through sixteen meticulous stages over three weeks. We wash the untreated handloom cotton in castor oil and camel dung, mordant it with harda fruit, print hand-carved teakwood blocks with katan (fermented iron rust and jaggery), and submerge the cloth into deep subterranean indigo vats maintained with living microbial cultures.

When you touch genuine Ajrakh, you are not touching ink on cloth; you are feeling the mineral chemistry of Kutch riverbeds, natural alizarin root, and centuries of astronomical block carving.`,
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      coverImageUrl: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1600&auto=format&fit=crop',
      isFeatured: true,
      followerCount: 2420,
      productCount: 12,
      location: {
        create: {
          villageOrTown: 'Ajrakhpur',
          district: 'Kutch',
          state: 'Gujarat',
          country: 'India',
          pincode: '370105',
          latitude: 23.2384,
          longitude: 69.8169,
        },
      },
      verification: {
        create: {
          isIdentityVerified: true,
          isMasterArtisan: true,
          nationalAwardee: true,
          giCertified: true,
          verifiedAt: new Date('2023-01-15'),
          notes: 'UNESCO Seal of Excellence & Shilp Guru Award recipient.',
        },
      },
      media: {
        create: [
          {
            type: 'WORKSHOP',
            url: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1200&auto=format&fit=crop',
            caption: 'Carved teakwood relief blocks submerged in vegetable mordants.',
            displayOrder: 1,
          },
          {
            type: 'PROCESS',
            url: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop',
            caption: 'Washing printed organic yardage in open aeration troughs.',
            displayOrder: 2,
          },
        ],
      },
      categories: {
        create: {
          categoryId: textilesCat.id,
        },
      },
    },
  });

  // Artisan 2: Bashir Ahmad Bhat (Srinagar, Kashmir)
  const bashirUser = await prisma.user.create({
    data: {
      email: 'bashir.bhat@karigar.craft',
      passwordHash: '$2b$10$ep5s6h5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8',
      role: Role.ARTISAN,
      isVerified: true,
      profile: {
        create: {
          firstName: 'Bashir Ahmad',
          lastName: 'Bhat',
          city: 'Srinagar',
          state: 'Jammu & Kashmir',
          avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
        },
      },
    },
  });

  const bashirProfile = await prisma.artisanProfile.create({
    data: {
      userId: bashirUser.id,
      artisanName: 'Bashir Ahmad Bhat',
      slug: 'bashir-ahmad-pashmina',
      craftName: 'Hand-Spun Pashmina & Micro-Needle Sozni',
      heritageLineage: 'Fourth Generation Shawl Atelier, Downtown Srinagar',
      experienceYears: 36,
      tagline: 'Grade-A Changthangi fleece spun on traditional yender wheels.',
      bio: 'Master weaver Bashir Ahmad works from an old stone-and-cedar courtyard near the Jhelum river, coordinating women spinners in Ladakh and master sozankars in Srinagar.',
      story: `Genuine Pashmina begins at 14,000 feet on the Changthang plateau, where the Capra Hircus goat endures sub-zero Himalayan winters. In spring, their moulted undercoat is combed gently—never sheared.

Back in the Kashmir valley, women hand-spin these delicate 12-micron fibers onto wooden spinning wheels called 'yender'. The yarn is so fragile that machine tension would instantly break it.

A single sozni embroidered shawl represents over 1,200 hours of continuous needlework, where single silk strands trace paisley motifs inspired by wild mountain saffron and almond blossoms.`,
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
      coverImageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1600&auto=format&fit=crop',
      isFeatured: true,
      followerCount: 1890,
      productCount: 8,
      location: {
        create: {
          villageOrTown: 'Zainakadal, Old City',
          district: 'Srinagar',
          state: 'Jammu & Kashmir',
          country: 'India',
          pincode: '190002',
          latitude: 34.0837,
          longitude: 74.7973,
        },
      },
      verification: {
        create: {
          isIdentityVerified: true,
          isMasterArtisan: true,
          nationalAwardee: true,
          giCertified: true,
          verifiedAt: new Date('2022-11-20'),
          notes: 'GI Kashmir Pashmina certified with micro-laser verification mark.',
        },
      },
      categories: {
        create: {
          categoryId: textilesCat.id,
        },
      },
    },
  });

  // Artisan 3: Devnath Kashyap (Bastar, Chhattisgarh)
  const devnathUser = await prisma.user.create({
    data: {
      email: 'devnath.kashyap@karigar.craft',
      passwordHash: '$2b$10$ep5s6h5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8',
      role: Role.ARTISAN,
      isVerified: true,
      profile: {
        create: {
          firstName: 'Devnath',
          lastName: 'Kashyap',
          city: 'Kondagaon',
          state: 'Chhattisgarh',
          avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
        },
      },
    },
  });

  const devnathProfile = await prisma.artisanProfile.create({
    data: {
      userId: devnathUser.id,
      artisanName: 'Devnath Kashyap',
      slug: 'devnath-bastar-dhokra',
      craftName: 'Lost-Wax Bell Metal Metallurgy (Dhokra)',
      heritageLineage: 'Ghadwa Tribal Metallurgy Guild, Bastar Forest Belt',
      experienceYears: 28,
      tagline: '4,000-year unbroken lost-wax bronze casting from central Indian forests.',
      bio: 'Practicing the sacred Ghadwa casting technique passed through generations in Kondagaon, translating tribal forest folklore into expressive bronze figures.',
      story: `The technique we practice has remained conceptually unchanged since the Bronze Age Dancing Girl of Harappa.

We model the internal core from local termite-mound clay and river silt. Around this core, we wind hand-drawn beeswax threads through a wooden press to sculpt intricate jewelry, deer antlers, or ritual vessels.

When molten recycled bell metal is poured into the sealed furnace mould, the wax melts and vaporizes—hence 'lost wax'. Every single piece is entirely singular: because the clay mould must be broken to release the bronze cast, no duplicate can ever exist.`,
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
      coverImageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1600&auto=format&fit=crop',
      isFeatured: true,
      followerCount: 1540,
      productCount: 9,
      location: {
        create: {
          villageOrTown: 'Kondagaon',
          district: 'Bastar',
          state: 'Chhattisgarh',
          country: 'India',
          pincode: '494226',
          latitude: 19.5969,
          longitude: 81.6705,
        },
      },
      verification: {
        create: {
          isIdentityVerified: true,
          isMasterArtisan: true,
          nationalAwardee: false,
          giCertified: true,
          verifiedAt: new Date('2023-04-10'),
          notes: 'GI Certified Bastar Dhokra artisan guild leader.',
        },
      },
      categories: {
        create: {
          categoryId: metalCat.id,
        },
      },
    },
  });

  // 3. Products
  await prisma.product.create({
    data: {
      artisanId: ismailProfile.id,
      categoryId: textilesCat.id,
      title: 'Kutch Indigo & Alizarin Chanderi Saree',
      slug: 'kutch-indigo-alizarin-chanderi-saree',
      shortDescription: '16-stage naturally dyed silk-cotton Chanderi saree stamped with hand-carved teak relief blocks.',
      fullStory: `This heirloom Chanderi saree represents three weeks of deliberate craft in Ajrakhpur. Dr. Ismail Khatri applies hand-carved woodblocks using fermented iron rust paste, red alizarin root, and pure desert indigo. 

The lightweight Chanderi weave combines gossamer silk warp with combed organic cotton weft, allowing breathability in tropical climates while radiating subtle natural luster. The geometric border reflects traditional Islamic astral stars and celestial river motifs.`,
      status: ProductStatus.PUBLISHED,
      basePrice: 18500.0,
      currency: 'INR',
      materials: ['60% Mulberry Silk', '40% Hand-Spun Cotton', 'Natural Fermented Indigo', 'Madder Root (Alizarin)', 'Tamarind Seed Gum'],
      dimensions: '5.5 meters length x 1.15 meters width (includes unstitched blouse piece)',
      weightGrams: 420,
      craftTechnique: 'Double-sided Ajrakh Resist Printing on Handloom Chanderi',
      makingDurationDays: 21,
      careInstructions: 'Dry clean only for the first two washes. Hand wash separately in cold water with mild ph-neutral soap nuts.',
      giTagCertified: true,
      regionOfOrigin: 'Kutch, Gujarat',
      isCustomizable: true,
      isFeatured: true,
      reviewCount: 38,
      averageRating: 4.9,
      images: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop',
            altText: 'Full drape of the indigo and madder Chanderi Ajrakh Saree with geometric borders',
            isPrimary: true,
            displayOrder: 1,
          },
          {
            url: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1200&auto=format&fit=crop',
            altText: 'Macro view showing intricate hand-carved block alignment and organic indigo variation',
            isPrimary: false,
            displayOrder: 2,
          },
        ],
      },
      variants: {
        create: [
          {
            sku: 'AJK-CHND-01-INDIGO',
            title: 'Midnight Indigo & Terracotta',
            price: 18500.0,
            stockQuantity: 4,
            attributes: { colorway: 'Deep Indigo / Madder Terracotta' },
          },
        ],
      },
    },
  });

  await prisma.product.create({
    data: {
      artisanId: bashirProfile.id,
      categoryId: textilesCat.id,
      title: 'Hand-Spun Natural Pashmina Shawl with Sozni Border',
      slug: 'hand-spun-natural-pashmina-shawl-sozni',
      shortDescription: 'Un-dyed Changthangi raw cashmere hand-spun on yender and bordered with fine silk sozni needlework.',
      fullStory: `Woven on traditional four-pedal wooden floor looms in Srinagar, this shawl honors the natural silver-fawn shade of winter cashmere without chemical bleaching.

The fine silk sozni embroidery along the four selvedges was completed over four months by master craftsman Bashir Ahmad Bhat using an ultra-fine steel needle with half-millimeter tension. The fabric is astonishingly lightweight yet provides deep, comforting warmth.`,
      status: ProductStatus.PUBLISHED,
      basePrice: 42000.0,
      currency: 'INR',
      materials: ['100% Grade-A Changthangi Cashmere (12-14 micron)', 'Raw Mulberry Silk Needle Embroidery'],
      dimensions: '200 cm x 100 cm (Full Stole / Wrap)',
      weightGrams: 165,
      craftTechnique: 'Handloom Diamond Twill Weave & Hand Sozni Needlework',
      makingDurationDays: 110,
      careInstructions: 'Store wrapped in pure cotton muslin with dried cedar chips or neem leaves. Professional dry clean only.',
      giTagCertified: true,
      regionOfOrigin: 'Srinagar, Kashmir',
      isCustomizable: true,
      isFeatured: true,
      reviewCount: 24,
      averageRating: 5.0,
      images: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1200&auto=format&fit=crop',
            altText: 'Natural fawn un-dyed Kashmiri Pashmina draped over hand-carved walnut chair',
            isPrimary: true,
            displayOrder: 1,
          },
          {
            url: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1200&auto=format&fit=crop',
            altText: 'Extreme macro of hand sozni silk needle stitches',
            isPrimary: false,
            displayOrder: 2,
          },
        ],
      },
      variants: {
        create: [
          {
            sku: 'KSH-PSH-SOZ-01',
            title: 'Natural Fawn & Crimson Needlework',
            price: 42000.0,
            stockQuantity: 2,
            attributes: { shade: 'Raw Unbleached Cashmere' },
          },
        ],
      },
    },
  });

  await prisma.product.create({
    data: {
      artisanId: devnathProfile.id,
      categoryId: metalCat.id,
      title: 'Bastar Forest Shaman & Sun Bird Dhokra Sculpture',
      slug: 'bastar-forest-shaman-sun-bird-dhokra-sculpture',
      shortDescription: 'One-of-a-kind lost-wax solid bell metal sculpture handcrafted in the forest at Kondagaon.',
      fullStory: `Sculpted by Devnath Kashyap using bees-wax coils and lost-wax casting, this piece depicts the tribal forest guardian honoring the seasonal migration of the sun bird.

Because the clay mould was destroyed during the pouring of red-hot molten bell metal, this sculpture is strictly unique; no replica exists or can ever be made. The patina is organic, created by rubbing fresh castor oil and forest ash onto warm bronze.`,
      status: ProductStatus.PUBLISHED,
      basePrice: 12800.0,
      currency: 'INR',
      materials: ['Bell Metal (Copper-Tin Alloy)', 'Organic Bee-Wax Coil Mould', 'Forest Termite Soil Core'],
      dimensions: 'Height: 32 cm, Width: 18 cm, Depth: 12 cm',
      weightGrams: 3100,
      craftTechnique: 'Lost-Wax Solid Metallurgical Casting (Ghadwa)',
      makingDurationDays: 14,
      careInstructions: 'Wipe with dry microfiber cloth. Do not use chemical brass polishes; natural bronze patina deepens beautifully over decades.',
      giTagCertified: true,
      regionOfOrigin: 'Bastar, Chhattisgarh',
      isCustomizable: false,
      isFeatured: true,
      reviewCount: 19,
      averageRating: 4.9,
      images: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1200&auto=format&fit=crop',
            altText: 'Lost-wax bronze Dhokra sculpture showing intricate beeswax wire textures',
            isPrimary: true,
            displayOrder: 1,
          },
        ],
      },
      variants: {
        create: [
          {
            sku: 'BST-DHK-SC-01',
            title: 'Antique Forest Bronze Patina',
            price: 12800.0,
            stockQuantity: 1,
            attributes: { piece: 'Single Edition Artisan Original' },
          },
        ],
      },
    },
  });

  // 4. Curated Editorial Collection
  const collection = await prisma.collection.create({
    data: {
      title: 'The Living Loom: Indigo & Cashmere',
      slug: 'the-living-loom',
      description: 'An editorial exploration of natural fibers, centuries-old mineral vats, and master weavers who resist the speed of industrial fashion.',
      curatorNote: 'Selected by Karigar curatorial council in collaboration with Shilp Guru awardees.',
      heroImageUrl: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1600&auto=format&fit=crop',
      isEditorial: true,
    },
  });

  console.info(`✅ Seed completed successfully! Created master artisans, categories, and products.`);
}

main()
  .catch((e) => {
    console.error('❌ Error during database seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
